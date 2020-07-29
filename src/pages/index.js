import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug="/about/"
      category="Misc"
      date="29 Aug 2020"
      timeToRead="5"
      title="Test title"
      description="Test description"/>
  </Layout>
)

export default IndexPage
