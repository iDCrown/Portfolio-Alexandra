import React, { useState, memo } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import TopNav from './TopNav';
import config from '../../../config';
import PropTypes from 'prop-types'

 function SideBar({ sections = [], resume = {}, authorName, heading, onClick  }) {
  const [headerOpen, toggleHeader] = useState(false);

  return (
    <div className={`${headerOpen ? 'header-visible' : ' '}`}>
      <TopNav
        title={config.authorName}
        onMenuClick={() => toggleHeader(!headerOpen)}
      />
      <div id="header">
        <div className="top">
          <Header
            title={authorName}
            heading={heading}
          />
          <Nav  sections={sections} resume={resume} onClick={onClick} />
        </div>
        <Footer socialLinks={config.socialLinks} />
      </div>
    </div>
  );
}

SideBar.propTypes = {
  onClick: PropTypes.func,
}

export default memo(SideBar);