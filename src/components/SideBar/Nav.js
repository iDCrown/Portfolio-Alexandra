import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';


export default function Nav({ sections = [], resume = {} }) {
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map(s => {
            return (
              <li key={s.id}>
                <Scroll type="id" element={s.id}>
                  <a href={s.id} id="top-link">
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
