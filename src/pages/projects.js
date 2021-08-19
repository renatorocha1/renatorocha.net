import React from "react"
import Layout from "./../components/Layout"
import SEO from "./../components/seo"

import * as S from "./../components/Post/styled"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" description="" />
    <S.PostHeader>
      <S.PostTitle>Portfolio</S.PostTitle>
    </S.PostHeader>
    <S.MainContent>
      <p>
        Comming soon...
      </p>
    </S.MainContent>
  </Layout>
)

export default PortfolioPage
