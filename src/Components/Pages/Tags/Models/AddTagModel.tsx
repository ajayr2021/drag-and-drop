import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { ModelProps } from "src/Types/AddTagModel";
import CloseIcon from "@mui/icons-material/Close";
import { useTags } from "src/Context/Tags/TagContext";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

const AddTagModel: React.FC<ModelProps> = ({ handleCloseDialog }) => {
  const { addTag } = useTags();
  const [tagTitle, setTagTitle] = useState("");
  const tagInputRef = useRef<HTMLInputElement>(null);

  const handelAddDialog = () => {
    addTag(tagTitle);
    handleCloseDialog();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTagTitle(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13 && !!tagTitle.trim().length) {
      event.preventDefault();
      handelAddDialog();
    }
  };

  useEffect(() => {
    tagInputRef.current && tagInputRef.current.focus();
  }, []);

  return (
    <Dialog open={true} onClose={handleCloseDialog}>
      <DialogTitle>Add Tag</DialogTitle>
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
        <TextField
          ref={tagInputRef}
          id="outlined-basic"
          label="Tag Title"
          variant="outlined"
          value={tagTitle}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          size="small"
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          autoFocus
          onClick={handelAddDialog}
          disabled={!tagTitle.trim().length}
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

export default AddTagModel;
