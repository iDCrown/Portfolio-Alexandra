import React from 'react';
import PropTypes from 'prop-types';

// icons
import Linkedin from '../../../assets/images/linkedin.svg'
import Facebook from '../../../assets/images/facebook.svg'
import Instagram from '../../../assets/images/instagram.svg'

const SocialLinks = ({ iconstyle, linkedin, facebook, instagram  }) => (
  <>
      <a href={linkedin}>
        <img src={Linkedin} alt="" className={iconstyle} />
      </a>
      <a href={facebook}>
        <img src={Facebook} alt="" className={iconstyle} />
      </a>
      <a href={instagram}>
        <img src={Instagram} alt="" className={iconstyle} />
      </a>
  </>
)

SocialLinks.propTypes = {
  linkedin: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  iconstyle: PropTypes.string,
}

export default SocialLinks;