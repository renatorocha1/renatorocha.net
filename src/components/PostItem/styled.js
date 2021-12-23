import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: var(--postColor);
  display: flex;
  text-decoration: none;
  &:hover {
    color: var(--highlight);
  }

  body#grid & {
    background-color: var(--background);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 2rem;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${(props) =>
    props.background ? props.background : "var(--highlight)"};
  color: ${(props) => (props.color ? props.color : "#fff")};
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  justify-content: center;
  padding: 5px 15px;
  margin-bottom: 1rem;
  border-radius: 2px;
  text-transform: uppercase;

  ${media.lessThan("large")`
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}

  body#grid & {
    margin-bottom: 0.2rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    margin: 0;
  `}

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  color: var(--highlight);
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  color: var(--texts);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
