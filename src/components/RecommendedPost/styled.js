import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #272822;
  border-top: 1px solid #272822;
  background: #272822;
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: #272822;
  color: #e3c18a;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  &:hover {
    background: #1e1f1c;
  }

  &.previous {
    border-right: 1px solid #272822;
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
