import React from 'react';
import PropTypes from 'prop-types'

// style
import './button.scss';

// theme = light & dark

const Button = ({ text, theme, onClick}) => (
	<button onClick={onClick} onKeyDown="" className={`button-content ${theme}`}>
		{text}
	</button>

)

Button.propTypes = {
	text: PropTypes.string.isRequired,
	theme: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

export default Button;