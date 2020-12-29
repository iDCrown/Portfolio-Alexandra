import React from 'react';
import {graphql} from "gatsby";

// components
import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

// Templates
import Home from '../templates/Home';
import Portfolio from '../templates/Portfolio';
import About from '../templates/About';
import Contact from '../templates/Contact';
import Blog from '../templates/Blog';

const sections = [
  { id: 'top', name: 'Home', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About', icon: 'fa-user' },
  { id: 'blog', name: 'Blog', },
  { id: 'contact', name: 'Contact', icon: 'fa-LogoNodejs' },
];

const resume = {
  url: "https://www3.animeflv.net/",
  name: 'Resume',
  icon: ""
}


const IndexPage = (props) => {
  
  const home = props.data.allContentfulPage.edges[2].node
  const portfolio = props.data.allContentfulPage.edges[3].node
  const blog = props.data.allContentfulPage.edges[1].node
  const about = props.data.allContentfulPage.edges[4].node
  const contact = props.data.allContentfulPage.edges[0].node

  return(
  <Layout>
      <SideBar sections={sections} resume={resume} />
      <div id="main">
        <Home id="top" title={home.title} subtitle={home.subtitle} buttontext={home.buttontext}/>
        <Portfolio id="portfolio" title={portfolio.title} image={portfolio.images}/>
        <About id="about" title={about.title} subtitle={about.subtitle} image={about.images[0].file.url} />
        <Blog id="blog" title={blog.title} buttontext={blog.buttontext} buttonlink={blog.buttonlink}/>
        <Contact id="contact" 
          title={contact.title} 
          formtitle={contact.formtitle} 
          subtitle={contact.subtitle} 
          formsubtitle={contact.formsubtitle} 
          buttontext={contact.buttontext}
        />
      </div>
      <PageFooter />
    </Layout>
  )

};

export default IndexPage;

export const pageQuery = graphql`
query {
  allContentfulPage {
    edges {
      node {
        buttonlink
        formsubtitle
        formtitle
        subtitle
        title
        buttontext
        content {
          raw
        }
        images {
          file {
            url
          }
          title
          id
        }
        slug
      }
    }
  }
}

`