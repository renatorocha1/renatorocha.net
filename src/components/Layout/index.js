import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import GlobalStyled from "./../../styles/global"
import Sidebar from "./../Sidebar"
import MenuBar from "./../Menubar"

const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <GlobalStyled />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar/>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
