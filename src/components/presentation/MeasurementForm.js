import { CircularProgressbar } from 'react-circular-progressbar';
import React, { useState } from 'react';
import '../../circle-styling.css';

const MeasurementForm = ({exam, focus}) => {
    const [cir_value, setCir_value] = useState(0);

    const setScoreValue = (e) => {
        setCir_value(parseFloat(e.target.value).toFixed(1));
    }

    return (
        <div>
            <CircularProgressbar value={cir_value} maxValue={9} text={`${cir_value}`} />
            <div className="tooltip">
                <span className="tooltiptext">Valid only for decimals between 0.0 and 9.0</span>
                <label htmlFor={exam}>{exam}</label>
                <input
                    type="number"
                    step=".5"
                    min="0" max="9"
                    name={exam}
                    placeholder="Enter score"
                    required
                    onChange={(e) => setScoreValue(e)}
                    autoFocus={focus}
                />
            </div>
        </div>
    )
}

export default MeasurementForm;