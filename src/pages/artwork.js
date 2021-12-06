import React from 'react';
import { graphql, Link} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "../scss/artwork.scss";

export default function Artwork({data}){
  const artwork = data.artwork.nodes;
  
  return (<>
    <Layout>
      <div className="artwork-container">
        <h1>Artwork</h1>
        <div className="artwork-galleryStrip">
          {artwork.map(artpiece=>(
            <div className="galleryStrip-piece" key={artpiece.id}>
              {/*<div className="galleryStrip-piece--title">{artpiece.frontmatter.title}: {artpiece.frontmatter.artworkDescription} </div>*/}
              <div className="galleryStrip-piece--title">
                <Link to={"/"+ artpiece.frontmatter.slug}>{artpiece.frontmatter.title}: {artpiece.frontmatter.artworkDescription}</Link>
              </div>

              <GatsbyImage className="galleryStrip-piece--image" image={getImage(artpiece.frontmatter.artwork.childImageSharp)} alt="artpiece"/>
              {console.log(artpiece.id)}
            </div>
          ))}
          
        </div>
        
      </div>
      
    </Layout>
  </>)  
}

export const pageQuery = graphql`
  query ArtworkQuery {
    artwork: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          artworkDescription
          artwork {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: AUTO
                jpgOptions: {quality: 100}
              )
            }
          }
          slug
        }
      }
    }
  }






`