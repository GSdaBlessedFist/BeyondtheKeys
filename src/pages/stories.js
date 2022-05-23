import React from 'react';
import { graphql, Link} from "gatsby";
import { Helmet } from 'react-helmet';
import Layout from "../components/layout";
import "../scss/stories.scss";

export default function Stories({data}){
	
	const {posts} = data.blog;

	return (<>
		<Helmet>
        <title>Stories-BeyondTheKeys()</title>
    </Helmet>
		<Layout>
			<div className="stories-container">
        <div>
					<h1>Stories</h1>
					
					{posts.map(post => (
								<Link to={post.fields.slug} >
					        <article key={post.id} className="storyLink--container">
					          	<h2 className="storyLink--title">{post.frontmatter.title}</h2>
						          
						          <p className="storyLink--summary"><strong>{post.frontmatter.summary}</strong></p>
						          <small>Author: {post.frontmatter.author}  |  Posted: {post.frontmatter.date}</small>
						      </article>
				        </Link>
				     ))}
				</div>	
      </div>
		
		</Layout>	
	</>)
}

export const pageQuery = graphql`
  query Stories {
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
