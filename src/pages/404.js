import React from 'react';
import { Link } from 'gatsby';

//component
import Layout from '../components/Layout';

//img
import error from '../assets/images/404.svg';

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section>
        <div className="container4">
          <section>
            <img className="container4-img" src={error} alt="error" />
          </section>
          <Link to="/">
            <i class="fa fa-reply" aria-hidden="true">  GO BACK</i>
          </Link>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
