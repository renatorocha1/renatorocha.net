import styled from "styled-components"

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid #38444d;
  color: red;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  a {
    color: blue;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: orange;
    }
  }
`
