import React,{memo} from 'react';
import PropTypes from 'prop-types';

// components
import renderRichText from '../../components/Base/RichText'

// style
import './contact.scss';

import SocialLink from '../../components/Base/SocialLinks';

const Contact = ({ id, title, content, facebook, instagram, linkedin  }) => {
  const ContentText = renderRichText(JSON.parse(content.raw));
  return(
		<section id={ id } className="four container-contact ">
			<div className="infocontent">
				<h1 className="infocontent-h1">{title}</h1>
        <div className="infocontent-p">
				  {ContentText}
        </div>
        <div className="icons">
          <SocialLink iconstyle="icons-icon" linkedin={linkedin} facebook={facebook} instagram={instagram}/>
        </div>
			</div>

	</section>
	)
}

Contact.propTypes = {
	title: PropTypes.string,
  content: PropTypes.object,
  linkedin: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
}

export default memo(Contact);