import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              background
              category
              date(formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            fields: { slug },
          },
          timeToRead,
        }) => (
          <PostItem
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
