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

// SideBar
const sections = [
  { id: 'top', name: 'Home', icon: 'fa-home' },
  { id: 'body', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About', icon: 'fa-user' },
  { id: 'blog', name: 'Blog', icon:' fa-address-book'},
  { id: 'contact', name: 'Contact', icon: 'fa-envelope-o' }, 
];

const resume = {
  url: "https://drive.google.com/file/d/1I4Y-wV1DfHwd0LrVcdwvGY6ecvlgv0Nm/view?usp=sharing ",
  name: 'Resume',
  icon: 'fa-file-text-o',
}

// Index

const IndexPage = (props) => {
  const [project, setProject] = useState(false);

//position content
  const contentful = props.data.allContentfulPage.edges
  
  const position = [ 
    {sectionarr:"Home"},
    {sectionarr:"Portfolio"},
    {sectionarr:"About"},
    {sectionarr:"Blog"},
    {sectionarr:"Contact"},
  ]

  const array1 = contentful.map(cont => cont.node);
  const array2 = position.map(pos => pos.sectionarr);
  const array3 = []

  const positioncontent = array2.filter(
    (p) => {
      let ok = false;
      for (var i = 0; i < array1.length; i++) { 
        if (array1[i].sectionName === p){
          return(
            array3.push(array1[i])
          )
        }
      }
      return ok;
    })

  console.log(positioncontent);


  const home = array3[0]
  const portfolio = array3[1]
  const about = array3[2]
  const blog = array3[3]
  const contact = array3[4]


  // // Projects
  const toggle = useCallback((id) => {
    const mProject = portfolio.projects.filter((item) => item.id === id)[0];
    setProject(mProject);
  });

  const click = () => setProject(false);

  if (!project) {
    return(
      <Layout>
        <SideBar 
          sections={sections} resume={resume} 
          authorName="MALEXCOB" 
          link="/top" 
          heading="SEO content writer and linguist"
          linkedin={contact.linkedin} 
          facebook={contact.facebook} 
          instagram={contact.instagram} 
          buttonlink={contact.buttonlink}
        />
        <div id="main">
          <Home id="top" title={home.title} subtitle={home.subtitle} buttontext={home.buttontext} image={home.images[0].file.url} content={home.content}/>
          <Portfolio id="body" title={portfolio.title} images={portfolio.projects} onClick={toggle}/>
          <About id="about" title={about.title} subtitle={about.subtitle} image={about.images[0].file.url} content={about.content} />
          <Blog id="blog" title={blog.title} buttontext={blog.buttontext} buttonlink={blog.buttonlink} content={blog.content}/>
          <Contact id="contact" 
            title={contact.title} 
            content={contact.content}
            buttontext={contact.buttontext}
            linkedin={contact.linkedin} 
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
        <SideBar 
          className="activeport" 
          onClick={click}  
          sections={sections} 
          resume={resume} 
          authorName="MALEXCOB" 
          heading="SEO content writer and linguist"   
          linkedin={contact.linkedin} 
          facebook={contact.facebook} 
          instagram={contact.instagram}
          buttonlink={contact.buttonlink}
        />
        <div id="main">
          <Home id="top" onClickHome={click} title={home.title} subtitle={home.subtitle} buttontext={home.buttontext} image={home.images[0].file.url} content={home.content}/>
          <Project id="body" onClick={click} carousel={project.carousel} content={project.content} title={project.title}/>
          <About id="about" title={about.title} subtitle={about.subtitle} image={about.images[0].file.url} content={about.content} />
          <Blog id="blog" title={blog.title} buttontext={blog.buttontext} buttonlink={blog.buttonlink} content={blog.content}/>
          <Contact id="contact" 
            title={contact.title} 
            content={contact.content}
            buttontext={contact.buttontext}
            linkedin={contact.linkedin} 
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
        sectionName
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