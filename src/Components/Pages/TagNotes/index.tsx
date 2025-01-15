import React from "react";
import { useTags } from "src/Context/Tags/TagContext";
import { TagNotesWrapper } from "./TagNotes.style";
import { Box } from "@mui/material";
import TagCard from "src/Components/Common/TagCard";

const TagNotes = () => {
  const { tags } = useTags();

  return (
    <TagNotesWrapper>
      {!!tags.length ? (
        tags.map((tag) => <TagCard key={tag.id} tag={tag} />)
      ) : (
        <Box className="tag-no-found">No Tag Found</Box>
      )}
    </TagNotesWrapper>
  );
};

export default TagNotes;
