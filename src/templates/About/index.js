import React,{memo} from 'react';
import PropTypes from 'prop-types'

// components
import renderRichText from '../../components/Base/RichText';

// style
import './about.scss'

const About = ({ id, title, subtitle, image, content }) => {
  const ContentText = renderRichText(JSON.parse(content.raw));
    return (
      <section id={ id } className="content-about">
        <div className="about">
          <h1 className="about-h1">{title}</h1>
          <h2 className="about-h2">{subtitle}</h2>
         {ContentText}
        </div>
        <div className="contentainerimageabout">
          <div className="contentainerimageabout-content-image">
            <img src={image} alt="" className="contentainerimageabout-about-image" />
          </div>
        </div>
      </section>
    )

}

About.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.object,
}

export default memo(About); 