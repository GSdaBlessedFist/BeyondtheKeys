import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import "../scss/story-post.scss";

export default function StoryPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="stories-container">
        <h1 className="story-post--title">{post.frontmatter.title}</h1>
        <small>Author: {post.frontmatter.author}  |  Posted: {post.frontmatter.date}</small>
        <div className="story-post--content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query StoryQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`