import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={css.list}>
        {options.map(el => (
          <li key={el}>
            <button
              type="button"
              className={css.btn}
              onClick={() => onLeaveFeedback(el)}
            >
              {el.slice(0, 1).toUpperCase() + el.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
