import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"
import Avatar from "./../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata : { title, position, description }
    }
  } = useStaticQuery(graphql`
        query Metadata {
          site {
            siteMetadata {
              title
              position
              description
            }
          }
        }
      `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ProfileLink>
    </S.ProfileWrapper>
  )
}

export default Profile