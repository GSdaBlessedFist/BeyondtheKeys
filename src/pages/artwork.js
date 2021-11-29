import React from 'react';
import { graphql, Link} from "gatsby";
import Layout from "../components/layout";
import "../scss/artwork.scss";

export default function Artwork(){
  
  return (<>
    <Layout>
      <div className="artwork-container rb">
        <h1>Artwork</h1>
        <div className="artwork-galleryStrip">
          <div className="galleryStrip-piece">
            <div className="galleryStrip-piece--title">placeholder</div>
            <img className="galleryStrip-piece--image" src="https://picsum.photos/300/360" alt=""/>
          </div>
        </div>
        
      </div>
      
    </Layout>
  </>)  
}
