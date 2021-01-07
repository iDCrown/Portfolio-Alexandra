import React,{useCallback, useState, memo} from 'react';
import {graphql} from "gatsby";

// components
import Layout from '../components/Layout';
import SideBar from '../components/SideBar';

// Templates
import Home from '../templates/Home';
import Portfolio from '../templates/Portfolio';
import About from '../templates/About';
import Contact from '../templates/Contact';
import Blog from '../templates/Blog';
import Project from '../templates/Project';

const sections = [
  { id: 'top', name: 'Home', icon: 'fa-home' },
  { id: 'body', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About', icon: 'fa-user' },
  { id: 'blog', name: 'Blog', },
  { id: 'contact', name: 'Contact', icon: 'fa-LogoNodejs' },
];

const resume = {
  url: "https://drive.google.com/file/d/1I4Y-wV1DfHwd0LrVcdwvGY6ecvlgv0Nm/view?usp=sharing ",
  name: 'Resume',
  icon: ""
}


const IndexPage = (props) => {
  const [project, setProject] = useState(false);

  const home = props.data.allContentfulPage.edges[4].node
  const portfolio = props.data.allContentfulPage.edges[0].node
  const blog = props.data.allContentfulPage.edges[2].node
  const about = props.data.allContentfulPage.edges[3].node
  const contact = props.data.allContentfulPage.edges[1].node

  
  const toggle = useCallback((id) => {
    const mProject = portfolio.projects.filter((item) => item.id === id)[0];
    setProject(mProject);
  });

  console.log(!project)

  if (!project) {
    return(
      <Layout>
        <SideBar sections={sections} resume={resume} authorName="MALEXCOB" link="/top" heading="SEO content writer and linguist" />
        <div id="main">
          <Home id="top" title={home.title} subtitle={home.subtitle} buttontext={home.buttontext} image={home.images[0].file.url} content={home.content}/>
          <Portfolio id="body" title={portfolio.title} images={portfolio.projects} onClick={toggle}/>
          <About id="about" title={about.title} subtitle={about.subtitle} image={about.images[0].file.url} content={about.content} />
          <Blog id="blog" title={blog.title} buttontext={blog.buttontext} buttonlink={blog.buttonlink} content={blog.content}/>
          <Contact id="contact" 
            title={contact.title} 
            content={contact.content}
            buttontext={contact.buttontext}
            likedin={contact.likedin} 
            facebook={contact.facebook} 
            instagram={contact.instagram}        
            />
        </div>
      </Layout>
    )
  }
  
  else {
    return(
      <Layout>
        <SideBar onClick={() => setProject(false)}  sections={sections} resume={resume} authorName="MALEXCOB" heading="SEO content writer and linguist" />
        <div id="main">
          <Home id="top" onClickHome={() => setProject(false)} title={home.title} subtitle={home.subtitle} buttontext={home.buttontext} image={home.images[0].file.url} content={home.content}/>
          <Project id="body" carousel={project.carousel} content={project.content} title={project.title}/>
          <About id="about" title={about.title} subtitle={about.subtitle} image={about.images[0].file.url} content={about.content} />
          <Blog id="blog" title={blog.title} buttontext={blog.buttontext} buttonlink={blog.buttonlink} content={blog.content}/>
          <Contact id="contact" 
            title={contact.title} 
            content={contact.content}
            buttontext={contact.buttontext}
            likedin={contact.likedin} 
            facebook={contact.facebook} 
            instagram={contact.instagram}        
            />
        </div>
      </Layout>
      )
  }

};

export default memo(IndexPage);

export const pageQuery = graphql`
query {
  allContentfulPage {
    edges {
      node {
        buttonlink
        subtitle
        title
        buttontext
        linkedin
        facebook
        instagram
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
        projects {
          carousel {
            file {
              url
            }
          }
          content {
            raw
          }
          id
          title
          front {
            file {
              url
            }
          }
        }
      }
    }
  }
}

`