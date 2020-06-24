import React from 'react';
import { graphql, Link } from 'gatsby';
// import PropTypes from 'prop-types';

const Home = () => (
  <div>
    {/* {data.site.siteMetadata.title} */}
    <Link to="/account">Go to your account</Link>
  </div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Home;
