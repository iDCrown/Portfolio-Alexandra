import React from 'react';
import PropTypes from 'prop-types';

// icons

const SocialLinks = ({ iconstyle, linkedin, facebook, instagram  }) => (
  <>
    <a href={linkedin} target="_blank" rel="noreferrer">
      <i className={`fa fa-linkedin ${iconstyle}`} aria-hidden="true"></i>
    </a>
    <a href={facebook} target="_blank" rel="noreferrer">
      <i className={`fa fa-facebook ${iconstyle}`} aria-hidden="true"></i>
    </a>
    <a href={instagram} target="_blank" rel="noreferrer">
      <i className={`fa fa-instagram ${iconstyle}`} aria-hidden="true"></i>
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