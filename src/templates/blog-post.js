import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/Layout"
import SEO from "./../components/seo"
import RecommendedPost from "./../components/RecommendedPost"
import Comments from "./../components/Comments"
import * as S from "./../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const next = pageContext.nextPost
  const previous = pageContext.previousPost
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min to read
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPost next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(locale: "en-us", formatString: "DD MMMM YYYY")
        description
      }
      timeToRead
      html
    }
  }
`

export default BlogPost
