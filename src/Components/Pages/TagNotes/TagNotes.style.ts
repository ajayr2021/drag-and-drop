import styled from "styled-components";

export const TagNotesWrapper = styled.div`
  display: flex;
  gap: 5px;
  padding: 0 10px;
  flex-direction: column;

  .notes-header{
    display: flex;
    justify-content: end;
  }

  .note-list {
    margin-top: 5px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
