import React, { useState, memo } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import TopNav from './TopNav';
import config from '../../../config';
import PropTypes from 'prop-types'

 function SideBar({ sections = [], resume = {}, authorName, heading, onClick, className  }) {
  const [headerOpen, toggleHeader] = useState(false);

  console.log(headerOpen)

  return (
    <div  className={`${headerOpen ? 'header-visible' : ' '}`}>
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
        <Footer socialLinks={config.socialLinks} />
      </div>
    </div>
  );
}

SideBar.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default memo(SideBar);