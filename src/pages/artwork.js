import React from 'react';
import { graphql, Link} from "gatsby";
import Layout from "../components/layout";
import "../scss/artwork.scss";

export default function Artwork(){
  
  return (<>
    <Layout>
      <div className="artwork-container">
        <h1>Artwork</h1>
        <img src="" alt=""/>
      </div>
      
    </Layout>
  </>)  
}
