import { DragEvent, useState } from "react";
import { useTags } from "src/Context/Tags/TagContext";
import { TagNotesWrapper } from "./TagNotes.style";
import { Box, Button } from "@mui/material";
import TagCard from "src/Components/Common/TagCard";
import AddIcon from "@mui/icons-material/Add";
import AddTagNotesModel from "./Models/AddTagNotesModel";
import { useTagNotes } from "src/Context/TagNotes/TagNotesContext";
import { TagNotes as TagNotesType } from "src/Types";

const TagNotes = () => {
  const { tags } = useTags();
  const { addNotes, deleteNotes } = useTagNotes();

  const [dialogState, setDialogState] = useState({
    open: false,
  });

  const handleOpenDialog = () => {
    setDialogState({ open: true });
  };

  const handleCloseDialog = () => {
    setDialogState({ open: false });
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>, dropTagId: number) => {
    event.preventDefault();
    const {
      note: item,
      tagId: sourceTagId,
    }: { note: TagNotesType; tagId: number } = JSON.parse(
      event.dataTransfer.getData("dnd")
    );

    if (sourceTagId === dropTagId) return;

    deleteNotes(item.id);
    addNotes(item.note, dropTagId);
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
          tags.map((tag) => (
            <Box
              key={tag.id}
              onDrop={(e) => handleDrop(e, tag.id)}
              onDragOver={(event) => event.preventDefault()}
            >
              <TagCard tag={tag} />
            </Box>
          ))
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
