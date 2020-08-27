import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import * as S from "./styled"
import GlobalStyled from "./../../styles/global"
import Sidebar from "./../Sidebar"
import MenuBar from "./../Menubar"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyled />

      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>

      <S.LayoutMain>{children}</S.LayoutMain>

      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
