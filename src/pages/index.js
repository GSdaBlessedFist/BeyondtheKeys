import React from "react"
import {graphql,Link} from "gatsby";
import "../scss/global.scss";
import Layout from "../components/layout";
import IntroModal from "../components/intro_modal";

export default function Home({data}) {
  
  const {title,description} = data.site.siteMetadata;

  return (<>
      <IntroModal visible={true}/>
      <Layout>
        THIS ONE
      </Layout>      
      {/*<div>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to="/blog">Read my blog</Link>
        <img src={data.image.publicURL} alt="deathstar"/>
      </div>*/}
    </>)
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "earthclouds.jpg" }) {
      publicURL
    }
  }
`