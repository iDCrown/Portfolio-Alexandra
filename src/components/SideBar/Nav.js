import React, { memo } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';
import PropTypes from 'prop-types';

 function Nav({ sections = [], resume = {}, onClick, className }) {

  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}>
          {sections.map(s => {
            return (
              <li className={className} key={s.id}>
                <Scroll type="id" element={s.id}>
                  <a 
                    href={s.id} 
                  >
                    <span  onKeyDown={onClick} 
                    role="button" tabIndex={0} 
                    onClick={onClick} className={`icon ${s.icon}`}>{s.name}</span>
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>
          <li>
            <a href={resume.url} >
              <span className={`icon ${resume.icon}`}>{resume.name}</span>
            </a>
          </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default memo(Nav);