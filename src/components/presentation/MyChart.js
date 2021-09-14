import React, { useEffect, useState } from 'react';
import { Chart } from 'react-charts'

const MyChart = ({results}) => {
    function defChartData(results) {
        let arr = []
        results.map((res) => {
            arr.push([results.indexOf(res)+1, parseFloat(res.overall_score)]);
            return arr
        })

        let output = {
            label: 'Series 1',
            data: arr
        }

        return output;
    }

    // Define Planned Chart
    // diff_score = planned 8.0 - initial score 6.0 => 2.0
    // diff_period = planned 2022-04-30 - initial 2021-09-30 => 210 days
    // required_daily_progress = diff_score 2.0 / diff_period 210 days = 0.01
    
    function defPlannedChartData() {
        let planned_score = 8.0;
        let initial_score = 6.0;
        let diff_score = planned_score - initial_score;

        // let planned_date = "2022-04-30";
        // let initial_date = "2021-09-30";
        // let diff_date = planned_date - initial_date;
        let diff_date = 30

        let required_daily_progress = diff_score/diff_date;

        let arr = [[0, initial_score]]
        let current = initial_score;
        for (let i = 1; i <= diff_date; i++) {
            arr.push([i, current += required_daily_progress])
        }

        let output = {
            label: 'Series 3',
            data: arr
        }

        return output;
    }

    const data = React.useMemo(
        () => [
            defChartData(results),
            defPlannedChartData()
        ]
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
    
    const lineChart = (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
        style={{
            width: '22rem',
            height: '12rem'
        }}
        >
        {results.length > 0 && <Chart data={data} axes={axes} />}
        </div>
    )
    return lineChart
}

export default MyChart;