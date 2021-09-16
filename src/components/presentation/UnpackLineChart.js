import React from 'react';
import { Chart } from 'react-charts';

const UnpackLineChart = ({results, currentUser}) => {
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
    
    function defPlannedChartData() {
        console.log("currentUser", currentUser.currentUser);
        currentUser = {
            created_at: "2021-09-06T14:27:15.787Z",
            due_date: "2022-10-30",
            email: "brad@mail.com",
            id: 4,
            level_current: null,
            level_initial: "7.0",
            level_plan: "8.5",
            name: "Brad",
            password_digest: "$2a$12$kSloCpTQ6RJTO.04tn1ZmuPeUVl6KfdlvurENkCtXxhIZ9Iquaqzy",
        }
        let planned_score = parseFloat(currentUser.level_plan);
        let initial_score = parseFloat(currentUser.level_initial);
        let diff_score = planned_score - initial_score;

        let execution_period = 30

        let required_daily_progress = diff_score/execution_period;

        let arr = [[0, initial_score]]
        let current = initial_score;
        for (let i = 1; i <= execution_period; i++) {
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
            width: '24rem',
            height: '14rem',
        }}
        >
        {<Chart data={data} axes={axes} />}
        </div>
    )
    return lineChart
}

export default UnpackLineChart;
