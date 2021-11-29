import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";

export default function StoryPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="stories-container">
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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