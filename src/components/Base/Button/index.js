import React from 'react';
import PropTypes from 'prop-types'

// style
import './button.scss';

// theme = light & dark

const Button = ({ text, theme}) => (
	<button className={`button-content ${theme}`}>
		{text}
	</button>

)

Button.propTypes = {
	text: PropTypes.string.isRequired,
	theme: PropTypes.string.isRequired,
}

export default Button;