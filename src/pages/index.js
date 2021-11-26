import React from "react"
import {graphql,Link} from "gatsby";
import "../scss/global.scss";

export default function Home({data}) {
  
  const {title,description} = data.site.siteMetadata;

  return (<>
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/blog">Read my blog</Link>
      <img src={data.image.publicURL} alt="deathstar"/>
    </div>
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