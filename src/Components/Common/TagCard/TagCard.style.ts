import { Card } from "@mui/material";
import styled from "styled-components";

export const TagCardWrapper = styled(Card)`
  min-width: 300px;
  height: 50vh;

  .title {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .notes-list {
    height: 40vh;
    overflow-y: auto;
    display: flex;
    gap: 10px;
    flex-direction: column;

    .note-card {
      cursor: pointer;
      min-height: 50px;
      height: max-content;
    }
  }
`;
