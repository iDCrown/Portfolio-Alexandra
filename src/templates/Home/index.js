import React,{memo} from 'react';
import PropTypes from 'prop-types';

// components
import Scroll from '../../components/Scroll'
import Button from '../../components/Base/Button'
import renderRichText from '../../components/Base/RichText'

// style 
import './home.scss'

const Home = ({ id, title, subtitle, buttontext, image, content, onClickHome }) => {
  const ContentText = renderRichText(JSON.parse(content.raw))
  return(
    <section id={ id } className=" cover home"> 
      <img className="home-img" src={image} alt=""/>
      <div className="home-color"></div>
      <div className="containerhome">
        <div className="containerhome-contenthome">
          <h2 className="containerhome-contenthome-h2">
            {subtitle}
          </h2>
          <h1 className="containerhome-contenthome-h1">
            {title}
          </h1>
          <hr className="containerhome-contenthome-hr"/>
          <div className="containerhome-contenthome-p">
            {ContentText}
          </div>
        </div>

        <footer>
          <Scroll type="id" element={ 'body' }>
            <a href="#body" >
              <Button onClick={onClickHome} text={buttontext} theme="light"/>
            </a>
          </Scroll>
        </footer>
      </div>
    </section>
  )
}

Home.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttontext: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.object,
  onClickHome: PropTypes.func,
}

export default memo(Home);