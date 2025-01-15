import { tagData } from "src/Types";
import { TagCardWrapper } from "./TagCard.style";
import { CardContent, Typography } from "@mui/material";

const TagCard: React.FC<{ tag: tagData }> = ({ tag }) => {
  return (
    <TagCardWrapper variant="elevation">
      <CardContent>
        <Typography gutterBottom className="title">
          {tag.title}
        </Typography>
      </CardContent>
    </TagCardWrapper>
  );
};

export default TagCard;
