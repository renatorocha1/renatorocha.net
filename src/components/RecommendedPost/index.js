import React from "react"
import PropTypes from "prop-types"
import getThemeColor from "./../../utils/get_theme_color"
import * as S from "./styled"

const RecommendedPost = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        paintDrip
        hex={getThemeColor()}
        duration={1}
        to={previous.fields.slug}
        className="previous"
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        paintDrip
        hex={getThemeColor()}
        duration={1}
        to={next.fields.slug}
        className="next"
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPost.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPost
