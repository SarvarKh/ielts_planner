import { CircularProgressbar } from 'react-circular-progressbar';
import React, { useState } from 'react';
import '../../circle-styling.css';

const MeasurementForm = ({exam}) => {
    const [cir_value, setCir_value] = useState(0);

    const setScoreValue = (e) => {
        setCir_value(parseFloat(e.target.value).toFixed(1));
    }

    return (
        <>
            <CircularProgressbar value={cir_value} maxValue={9} text={`${cir_value}`} />
            <div className="tooltip">
                <span className="tooltiptext">Valid only for decimals between 0.0 and 9.0</span>
                <label htmlFor={exam}>Add {exam}</label>
                <input
                    type="number"
                    step=".5"
                    min="0" max="9"
                    name={exam}
                    placeholder="0"
                    required
                    onChange={(e) => setScoreValue(e)}
                />
            </div>
        </>
    )
}

export default MeasurementForm;