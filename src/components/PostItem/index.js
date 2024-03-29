import React from "react"
import PropsType from "prop-types"
import getThemeColor from "./../../utils/get_theme_color"

import * as S from "./styled"

const PostItem = ({
  slug,
  background = "#FECB2E",
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.PostItemLink paintDrip hex={getThemeColor()} duration={1} to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead} to read
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.PropsType = {
  slug: PropsType.string.isRequired,
  background: PropsType.string,
  category: PropsType.string.isRequired,
  date: PropsType.string.isRequired,
  timeToRead: PropsType.string.isRequired,
  title: PropsType.string.isRequired,
  description: PropsType.string.isRequired,
}

export default PostItem
