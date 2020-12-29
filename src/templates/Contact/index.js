import React from 'react';
import PropTypes from 'prop-types';

// components

import Button from '../../components/Base/Button'

// style
import './contact.scss';

const Contact = ({ id, title, formtitle, subtitle, formsubtitle, buttontext }) => (
		<section id={ id } className="four container-contact ">
			<div className="infocontent">
				<h1 className="infocontent-h1">{title}</h1>
				<h2 className="infocontent-h2">{subtitle}</h2>
				<h3 className="infocontent-h3">{formsubtitle}</h3>
				<p>
				Do you wanna talk to me about a project collaboration?
				</p>
				<br/>
				<p>
				You can send me a message to malexcob@gmail.com or fill up the form below and get in
touch:
				</p>
			</div>

			<div className="formcontent">
				<h1 className="formcontent-h1">{formtitle}</h1>
				<form method="post" action="#">
						<div className="form-input">
							<div className=" divform">
								<input className="divform-persondata" type="text" name="name" placeholder="Name" />
							</div>
							<div className=" divform">
								<input className="divform-persondata" type="text" name="email" placeholder="Email" />
							</div>
							<div className="divform">
								<textarea className="divform-message" name="message" placeholder="Message" />
							</div>
							<div>
								<a href=".">
									<Button text={buttontext} theme="dark"/>
								</a>
							</div>
						</div>
				</form>
			</div>

			<div className="icons">

			</div>
	</section>
)

Contact.propTypes = {
	title: PropTypes.string.isRequired,
	formtitle: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	formsubtitle: PropTypes.string.isRequired,
	buttontext: PropTypes.string.isRequired
}

export default Contact;