import { CircularProgressbar } from 'react-circular-progressbar';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../circle-styling.css';

const MeasurementForm = ({ exam }) => {
  const [cirValue, setcirValue] = useState(0);

  const setScoreValue = (e) => {
    setcirValue(parseFloat(e.target.value).toFixed(1));
  };

  return (
    <div>
      <CircularProgressbar value={cirValue} maxValue={9} text={`${cirValue}`} />
      <div className="tooltip">
        <span className="tooltiptext">Valid only for decimals between 0.0 and 9.0</span>
        <label htmlFor={exam}>{exam}</label>
        <input
          type="number"
          step=".5"
          min="0"
          max="9"
          name={exam}
          placeholder="Enter score"
          required
          onChange={(e) => setScoreValue(e)}
        />
      </div>
    </div>
  );
};

export default MeasurementForm;

MeasurementForm.propTypes = {
  exam: PropTypes.instanceOf(Object).isRequired,
};
