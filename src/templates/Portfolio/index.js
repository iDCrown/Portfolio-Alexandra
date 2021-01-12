import React,{memo} from 'react';
import PropTypes from 'prop-types';

// components
import ImageCard from '../../components/Core//ImageCard';

// style
import './portfolio.scss';

//icon
import icon from "../../assets/images/menu.svg"

const Portfolio = ({images = [], id, title, onClick}) => {
  console.log(images)
  return (
    <section id={ id } className="two portfolio">
      <div className="containerportfolio">
          <h1 className="containerportfolio-h1">{title}</h1>
          <img className="containerportfolio-icon" src={icon} alt=""/>
          <div className="containerCard">
            {
              images.map((img) => {
                return <ImageCard onClick={onClick} key={img.id} url={img.front.file.url} title={img.title} id={img.id}/>
              })
            }
          </div>
         
      </div>
    </section>
    )
}

Portfolio.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default memo(Portfolio);