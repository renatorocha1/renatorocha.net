import styled from "styled-components"

export default styled.a`
  font-size: 0.7em !important;
  background-color: var(--highlight);
  padding: 10px 15px;
  border-radius: 4px;
  color: var(--background) !important;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`
