import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/heroicons-solid/Home"
import { Search } from "@styled-icons/evaicons-solid/Search"
import { LightDown } from "@styled-icons/entypo/LightDown"
import { Grid } from "@styled-icons/entypo/Grid"
import { ArrowIosUpwardOutline as Arrow } from "@styled-icons/evaicons-outline/ArrowIosUpwardOutline"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Go Home">
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search" title="Search">
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Change Theme"
          className={theme}
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
        >
          <LightDown />
        </S.MenuBarItem>
        <S.MenuBarItem title="Change View">
          <Grid />
        </S.MenuBarItem>
        <S.MenuBarItem title="Go Top">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
