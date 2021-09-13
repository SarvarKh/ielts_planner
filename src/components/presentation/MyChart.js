import React from 'react';
import { Chart } from 'react-charts'

const MyChart = ({results}) => {
    
    // console.log('results: ', results);
    function defChartDate(results) {
        let arr = []
        results.map((res) => {
            console.log(res.created_at.substring(0, 10));
            arr.push([res.id, parseFloat(res.overall_score)]);
            return arr
        })

        let output = {
            label: 'Series 1',
            data: arr
        }

        return output;
    }

    const data = React.useMemo(
        () => [
            defChartDate(results),
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
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
            width: '400px',
            height: '300px'
        }}
        >
        {results.length > 0 && <Chart data={data} axes={axes} />}
        </div>
    )
    return lineChart
}

export default MyChart;