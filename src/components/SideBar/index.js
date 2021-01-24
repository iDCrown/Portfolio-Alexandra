import React, { useState, memo } from 'react';
import Header from './Header';
import Nav from './Nav';
import TopNav from './TopNav';
import config from '../../../config';
import SocialLink from '../Base/SocialLinks'
import PropTypes from 'prop-types'

 function SideBar({ sections = [], resume = {}, authorName, heading, onClick, className, facebook, instagram, linkedin, buttonlink  }) {
  const [headerOpen, toggleHeader] = useState(false);

  return (
    <div className={`${headerOpen ? 'header-visible' : ' '}`}>
      <TopNav
        title={config.authorName}
        onMenuClick={() => toggleHeader(!headerOpen)}
        icons={
          headerOpen 
          ? 
            <i className="fa fa-times menu" aria-hidden="true"></i>
          : 
            <i className="fa fa-bars menu" aria-hidden="true"></i> 
        }
      />
      <div id="header">
        <div className="top">
          <Header
            title={authorName}
            heading={heading}
          />
          <Nav className={className} sections={sections} resume={resume} onClick={onClick} />
        </div>
        <hr className="menuhr"/>
        <div className="headericons">
          <SocialLink iconstyle="headericons-icon" linkedin={linkedin} facebook={facebook} instagram={instagram} />
        </div>
        <p className="headerby">{buttonlink}</p>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  linkedin: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  buttonlink: PropTypes.string,
}

export default memo(SideBar);