import React, { useEffect, useState } from 'react';
import { Chart } from 'react-charts';

const MyChart = ({results}) => {
    const [currentUser, setCurrentUser] = useState([]);
    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const fetchCurrentUser = () => {
        const url = 'https://dry-brushlands-93092.herokuapp.com/info';
        const token = sessionStorage.getItem('token');

        fetch(url, {
          headers: {
            Authorization: token,
          }
        })
          .then(res => res.json())
          .then(data => setCurrentUser(data));
    }
    
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
        console.log('currentUser:', currentUser);
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
            padding: '1rem'
        }}
        >
        {results.length > 0 && <Chart data={data} axes={axes} />}
        </div>
    )
    return lineChart
}

export default MyChart;