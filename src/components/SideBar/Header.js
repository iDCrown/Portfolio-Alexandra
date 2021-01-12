import React from 'react';
import Scroll from '../Scroll'


export default function Footer({ title, heading }) {
  return (
    <div id="logo">
      <Scroll type="id" element={ 'top' }>
        <a href="#top">
          <h1 id="title">{title}</h1>
          <p>{heading}</p>
        </a>
      </Scroll>
    </div>
  );
}
