import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--background);
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: var(--background);
  color: var(--highlight);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: var(--mediumBackground);
  }

  &.previous {
    border-right: 1px solid var(--background);
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }

  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
