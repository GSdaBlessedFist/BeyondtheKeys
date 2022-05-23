import React from 'react';
import { graphql, Link} from "gatsby";
import { Helmet } from 'react-helmet';
import Layout from "../components/layout";
import "../scss/about.scss";

export default function About(){
	
  return (<>
    <Helmet>
        <title>About-BeyondTheKeys()</title>
    </Helmet>
    <Layout>
      <div className="about-container">
        <h1>About me</h1>
        <h3>Professional:</h3>
        <h3>Person:</h3>
      </div>
      
    </Layout>
  </>)	
}

