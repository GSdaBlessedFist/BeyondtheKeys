import React from "react"
import {graphql,Link} from "gatsby";
import "../scss/global.scss";
import Layout from "../components/layout";
import IntroModal from "../components/introModal";

export default function Home({data}) {
  
  const {title,description} = data.site.siteMetadata;
  
  return (<>
      
      <Layout >
        <IntroModal/>
        
      </Layout>      
      
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
  }
`

