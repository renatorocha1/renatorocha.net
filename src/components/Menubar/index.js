import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/heroicons-solid/Home"
import { Search } from "@styled-icons/evaicons-solid/Search"
import { LightDown } from "@styled-icons/entypo/LightDown"
import { Grid } from "@styled-icons/entypo/Grid"
import { List } from "@styled-icons/entypo/List"
import { ArrowIosUpwardOutline as Arrow } from "@styled-icons/evaicons-outline/ArrowIosUpwardOutline"

import getThemeColor from "./../../utils/get_theme_color"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)
  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          paintDrip
          hex={getThemeColor()}
          duration={1}
          to="/"
          title="Go Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          paintDrip
          hex={getThemeColor()}
          duration={1}
          to="/search"
          title="Search"
        >
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
        <S.MenuBarItem
          title="Change View"
          className="display"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Go Top">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
