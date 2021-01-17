import React from 'react';
import PropTypes from 'prop-types';

// components
import Carousel from '../../components/Core/carousel';
import renderRichText from '../../components/Base/RichText';

// style
import './project.scss'

const Project = ({ carousel, content, title, id, onClick }) => {
  const ContentText = renderRichText(JSON.parse(content.raw));

  return(
    <section id={id} className="project">
			<div className="project-carousel">
      <span role = "button" tabIndex={0} onKeyDown={onClick} onClick={onClick} >
        <h1 className="h1">
          <span className="volver fa fa-angle-double-left"/>
          {title}
        </h1>
      </span>
        <Carousel images={carousel} />
      </div>
      <div className="project-contentext">
        {ContentText}
      </div>
    </section>
    
  )
}

Project.propTypes = {
  carousel: PropTypes.array,
  content: PropTypes.object,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Project;