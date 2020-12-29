import React from 'react';
import PropTypes from 'prop-types';

// components
import Scroll from '../../components/Scroll';
import Button from '../../components/Base/Button'

// style 
import './home.scss'

const Home = ({ id, title, subtitle, description, buttontext }) => (
  <section id={ id } className="one dark cover home"> 
    <div className="container">
      <div className="containerhome">
        <h2 className="containerhome-h2">
          {subtitle}
        </h2>
        <h1 className="containerhome-h1">
          {title}
        </h1>
        <hr className="containerhome-hr"/>
        <p className="containerhome-p">{description}</p>
      </div>

      <footer>
        <Scroll type="id" element={ 'portfolio' }>
          <a href="#portfolio">
            <Button text={buttontext} theme="light"/>
          </a>
        </Scroll>
      </footer>
    </div>
  </section>
)

Home.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  buttontext: PropTypes.string.isRequired,
}

export default Home;