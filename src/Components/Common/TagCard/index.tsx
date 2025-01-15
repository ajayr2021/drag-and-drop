import { tagData } from "src/Types";
import { TagCardWrapper } from "./TagCard.style";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useTagNotes } from "src/Context/TagNotes/TagNotesContext";

const TagCard: React.FC<{ tag: tagData }> = ({ tag }) => {
  const { getNotesByTagId } = useTagNotes();
  const notes = getNotesByTagId(tag.id);

  return (
    <TagCardWrapper variant="elevation">
      <CardContent>
        <Typography gutterBottom className="title">
          {tag.title}
        </Typography>
        <Box className="notes-list">
          {notes.map((item) => (
            <Card key={item.id} variant="outlined" className="note-card">
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
