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
								<Link to={post.fields.slug} >
					        <article key={post.id} className="storyLink-container">
					          	<h2 className="storyLink-title">{post.frontmatter.title}</h2>
						          <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
						          <p><strong>{post.frontmatter.summary}</strong></p>
						      </article>
				        </Link>
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