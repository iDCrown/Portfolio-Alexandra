import React from 'react'
import PropTypes from 'prop-types'

// components
import Button from '../../components/Base/Button'

// style
import './blog.scss'

const Blog = ({ id, title, buttontext, buttonlink }) => (
	<section id={ id } className="blogsection">
		<div className="sectioncontainer">
			<h1 className="sectioncontainer-h1">{title}</h1>
			<hr className="sectioncontainer-hr"/>
			<div className="content-text">
				<p>This is a personal creative space where I’m used to writing cultural, historical, and musical
					content, and so on.</p>
				<br />
				<p>Find out a bit more about me and what I am passionate about doing.</p>
			</div>
			<a target="_blank" href={buttonlink}>
				<Button text={buttontext} theme="dark"/>
			</a>
			</div>
	</section>
)

Blog.propType = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	buttontext: PropTypes.string.isRequired,
	buttonlink: PropTypes.string.isRequired,
}	

export default Blog;