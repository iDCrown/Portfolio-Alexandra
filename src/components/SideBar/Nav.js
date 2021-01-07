import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';
import PropTypes from 'prop-types'

 function Nav({ sections = [], resume = {}, onClick }) {
   console.log(onclick)
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}>
          {sections.map(s => {
            return (
              <li onKeyDown="" onClick={onClick}>
                <Scroll type="id" element={s.id}>
                  <a key={s.id} href={s.id} >
                    <span className={`icon ${s.icon}`}>{s.name}</span>
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
}

export default Nav