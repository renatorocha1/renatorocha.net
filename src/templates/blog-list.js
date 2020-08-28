import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/Layout"
import PostItem from "./../components/PostItem"
import SEO from "./../components/seo"
import Pagination from "./../components/Pagination"
import * as S from "./../components/ListWrapper/styled"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListWrapper>
        {postList.map(
          (
            {
              node: {
                id,
                frontmatter: { background, category, date, description, title },
                fields: { slug },
              },
              timeToRead,
            },
            key
          ) => (
            <PostItem
              key={key}
              background={background}
              slug={slug}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
            />
          )
        )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            background
            category
            date(formatString: "DD MMMM YYYY")
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
`

export default BlogList
