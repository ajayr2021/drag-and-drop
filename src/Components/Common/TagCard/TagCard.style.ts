import { Card } from "@mui/material";
import styled from "styled-components";

export const TagCardWrapper = styled(Card)`
  min-width: 300px;
  
  .title {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
