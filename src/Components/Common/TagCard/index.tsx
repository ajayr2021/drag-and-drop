import { tagData, TagNotes } from "src/Types";
import { TagCardWrapper } from "./TagCard.style";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useTagNotes } from "src/Context/TagNotes/TagNotesContext";
import { DragEvent } from "react";

const TagCard: React.FC<{ tag: tagData }> = ({ tag }) => {
  const { getNotesByTagId } = useTagNotes();
  const notes = getNotesByTagId(tag.id);

  const handleDragStart = (
    event: DragEvent<HTMLDivElement>,
    note: TagNotes,
    tagId: number
  ) => {
    event.dataTransfer.setData("dnd", JSON.stringify({ note, tagId }));
  };

  return (
    <TagCardWrapper variant="elevation">
      <CardContent>
        <Typography gutterBottom className="title">
          {tag.title}
        </Typography>
        <Box className="notes-list">
          {notes.map((item) => (
            <Card
              key={item.id}
              variant="outlined"
              className="note-card"
              draggable
              onDragStart={(event) => handleDragStart(event, item, tag.id)}
            >
              <CardContent>
                <Typography>{item.note}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </CardContent>
    </TagCardWrapper>
  );
};

export default TagCard;
