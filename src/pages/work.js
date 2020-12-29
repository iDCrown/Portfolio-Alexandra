import React from 'react';

// components
import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

// template
import Work from '../templates/Work';

const sections = [
  { id: 'top', name: 'Home', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'blog', name: 'Blog', },
  { id: 'contact', name: 'Contact', icon: 'fa-LogoNodejs' },
];

const resume = {
  url: "https://www3.animeflv.net/",
  name: 'Resume',
  icon: ""
}

const WorkSection = () => (
  <Layout>
		<SideBar sections={sections} resume={resume} />
		<div id="main">
			<Work />
		</div>
		<PageFooter />
	</Layout>
)

export default WorkSection;