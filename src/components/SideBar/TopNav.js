import React,{ memo } from 'react';
import PropTypes from 'prop-types';

function TopNav({ onMenuClick = () => {}, icons }) {
  return (
    <div id="headerToggle">
      <a
        href="/#"
        className="toggle"
        onClick={e => {
          e.preventDefault();
          onMenuClick();
        }}
      >
        {icons}
      </a>
    </div>
  );
}

TopNav.propTypes = {
  icons: PropTypes.object,
}

export default memo(TopNav)