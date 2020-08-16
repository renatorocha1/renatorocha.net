import styled from "styled-components"

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid #38444d;
  color: #a4a59f;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  a {
    color: #e3c18a;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: orange;
    }
  }
`
