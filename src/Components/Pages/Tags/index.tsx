import { useState } from "react";
import AddTagModel from "./Models/AddTagModel.tsx";
import { TagWrapper } from "./Tages.style.ts";
import { Box, Button, Chip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTags } from "src/Context/Tags/TagContext.tsx";

const Tags = () => {
  const [dialogState, setDialogState] = useState({
    open: false,
  });
  const { tags, removeTag } = useTags();

  const handleOpenDialog = () => {
    setDialogState({ open: true });
  };

  const handleCloseDialog = () => {
    setDialogState({ open: false });
  };

  return (
    <TagWrapper>
      <Box className="tag-header">
        <Typography>Tags</Typography>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={handleOpenDialog}
        >
          Add Tag
        </Button>
      </Box>
      {dialogState.open && (
        <AddTagModel handleCloseDialog={handleCloseDialog} />
      )}
      <Box className="tag-list">
        {!!tags.length ? (
          tags.map((tag) => (
            <Chip
              key={tag.id}
              label={tag.title}
              onDelete={() => removeTag(tag.id)}
            />
          ))
        ) : (
          <Typography className="tag-no-found">No Tag Found</Typography>
        )}
      </Box>
    </TagWrapper>
  );
};

export default Tags;
