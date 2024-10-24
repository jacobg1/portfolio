import * as React from "react";

import type { SxProps } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const tagsListStyles: SxProps = {
  margin: "15px 0 0 0",
};

const chipStyles: SxProps = {
  border: "2px solid #014b95",
  color: "#000000",
  paddingTop: "4px",
  fontWeight: 600,
};

interface TagsListProps {
  tags: string;
}

export const TagsList = ({ tags }: TagsListProps): JSX.Element | null => {
  const tagsArray = tags?.split(",");

  if (!tagsArray?.length) return null;

  return (
    <Stack sx={tagsListStyles} direction="row" spacing={2}>
      {tagsArray.map((tag) => (
        <Chip
          sx={chipStyles}
          key={tag}
          label={tag.trim()}
          variant="outlined"
          onClick={() => console.log("test")}
        />
      ))}
    </Stack>
  );
};
