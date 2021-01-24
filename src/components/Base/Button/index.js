import React from 'react';
import PropTypes from 'prop-types'

// style
import './button.scss';

const Button = ({ text, onClick}) => (
  <button onClick={onClick} onKeyDown={onClick} className="buttoncontent">
    <span>
      {text}
    </span>
    <span className="fa fa-angle-right buttoncontent-icon"></span>
  </button>

)

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;