import { useState } from "react";
import { useTags } from "src/Context/Tags/TagContext";
import { TagNotesWrapper } from "./TagNotes.style";
import { Box, Button } from "@mui/material";
import TagCard from "src/Components/Common/TagCard";
import AddIcon from "@mui/icons-material/Add";
import AddTagNotesModel from "./Models/AddTagNotesModel";

const TagNotes = () => {
  const { tags } = useTags();

  const [dialogState, setDialogState] = useState({
    open: false,
  });

  const handleOpenDialog = () => {
    setDialogState({ open: true });
  };

  const handleCloseDialog = () => {
    setDialogState({ open: false });
  };

  return (
    <TagNotesWrapper>
      <Box className="notes-header">
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={handleOpenDialog}
        >
          Add Notes
        </Button>
      </Box>
      <Box className="note-list">
        {!!tags.length ? (
          tags.map((tag) => <TagCard key={tag.id} tag={tag} />)
        ) : (
          <Box className="tag-no-found">No Tag Found</Box>
        )}
      </Box>
      {dialogState.open && (
        <AddTagNotesModel handleCloseDialog={handleCloseDialog} />
      )}
    </TagNotesWrapper>
  );
};

export default TagNotes;
