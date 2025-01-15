import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ModelProps } from "src/Types";
import CloseIcon from "@mui/icons-material/Close";
import { ChangeEvent, useState } from "react";
import { useTags } from "src/Context/Tags/TagContext";
import { useTagNotes } from "src/Context/TagNotes/TagNotesContext";

type noteDataType = {
  tagId: number | null;
  note: string;
};

const AddTagNotesModel: React.FC<ModelProps> = ({ handleCloseDialog }) => {
  const { tags } = useTags();
  const { addNotes } = useTagNotes();
  const [noteData, setNoteData] = useState<noteDataType>({
    tagId: null,
    note: "",
  });

  const handelAddDialog = () => {
    if (noteData.tagId) {
      addNotes(noteData.note, noteData.tagId);
      handleCloseDialog();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNoteData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Dialog open={true} onClose={handleCloseDialog}>
      <DialogTitle>Add Notes</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleCloseDialog}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Select
            value={noteData.tagId}
            name="tagId"
            // label="Tag"
            onChange={handleChange}
            size="small"
          >
            {!!tags.length ? (
              tags.map((tag) => (
                <MenuItem key={tag.id} value={tag.id}>
                  {tag.title}
                </MenuItem>
              ))
            ) : (
              <MenuItem value={null}>No Tags are there</MenuItem>
            )}
          </Select>
          <TextField
            id="outlined-basic"
            placeholder="Tag Title"
            variant="outlined"
            value={noteData.note}
            name="note"
            onChange={handleChange}
            //   onKeyDown={handleKeyDown}
            size="small"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          autoFocus
          onClick={handelAddDialog}
          disabled={!noteData.note.trim().length || !noteData.tagId}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleCloseDialog}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTagNotesModel;
