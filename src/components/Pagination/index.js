import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../../utils/get_theme_color"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink paintDrip hex={getThemeColor()} duration={1} to={prevPage}>
        Prev page
      </AniLink>
    )}
    <p>page {`${currentPage} of ${numPages}`}</p>
    {!isLast && (
      <AniLink paintDrip hex={getThemeColor()} duration={1} to={nextPage}>
        Next page
      </AniLink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
