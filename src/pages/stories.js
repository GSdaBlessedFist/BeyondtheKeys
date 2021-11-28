import React from 'react';
import { graphql, Link} from "gatsby";
import Layout from "../components/layout";
import "../scss/stories.scss";

export default function Stories({data}){
	
	const {posts} = data.blog;

	return (<>
		<Layout>
			<div className="stories-container">
        <div>
					<h1>Stories</h1>
					
					{posts.map(post => (
				        <article key={post.id} className="story-container">
				        	<Link to={post.fields.slug} >
				          	<h2>{post.frontmatter.title}</h2>
				          </Link>
				          <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
				          <p><strong>{post.frontmatter.summary}</strong></p>
				        </article>
				     ))}
				</div>	
      </div>
		
		</Layout>	
	</>)
}

export const pageQuery = graphql`
  query MyQuery {
  blog: allMarkdownRemark {
    posts: nodes {
      fields {
        slug
      }
      frontmatter {
        date(fromNow: true)
        title
        author
        summary
      }
      excerpt
      id
    }
  }
}


`