import styled from "styled-components";

export const TagWrapper = styled.div`
  padding: 10px;

  .tag-header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .tag-list{
    margin-top: 5px;
    background-color: #f3e49c;
    padding: 0.5rem;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    .tag-no-found{
        text-transform: capitalize;
        font-weight: 500;
        margin: 0 auto;
    }
  }
`;
