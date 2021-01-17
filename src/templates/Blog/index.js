import React,{memo} from 'react'
import PropTypes from 'prop-types'

// components
import Button from '../../components/Base/Button'
import renderRichText from '../../components/Base/RichText';

// style
import './blog.scss'

const Blog = ({ id, title, buttontext, buttonlink, content }) => {
	const ContentText = renderRichText(JSON.parse(content.raw));
	return(
		<section id={ id } className="blogsection">
			<div className="sectioncontainer">
				<h1 className="sectioncontainer-h1">{title}</h1>
				<hr className="sectioncontainer-hr"/>
				<div className="content-text">
					{ContentText}
				</div>
				<a target="_blank" rel="noreferrer" href={buttonlink}>
					<Button text={buttontext} theme="dark"/>
				</a>
			</div>
		</section>
	)
}

Blog.propType = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	buttontext: PropTypes.string.isRequired,
	buttonlink: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
}	

export default memo(Blog);