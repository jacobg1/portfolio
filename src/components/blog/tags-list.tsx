import * as React from "react";

import AdsClickIcon from "@mui/icons-material/AdsClick";
import type { SxProps } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Link as InternalLink } from "gatsby";

import { createTagPageLink } from "../../utils";

const tagsListStyles: SxProps = {
  margin: "15px 0 0 0",
};

const chipStyles: SxProps = {
  color: "#000000",
  backgroundColor: "#FFFFFF",
  fontWeight: 900,
  "& .MuiChip-label": {
    paddingTop: { xs: "2px", sm: "4px" },
  },
  "& .MuiChip-icon": {
    color: "#000000",
    fontSize: "22px",
  },
};

interface TagsListProps {
  tags: string[];
}

export const TagsList = ({ tags }: TagsListProps): JSX.Element | null => {
  if (!tags?.length) return null;

  return (
    <Stack sx={tagsListStyles} direction="row" spacing={2}>
      {tags.map((tag) => (
        <Chip
          sx={chipStyles}
          key={tag}
          icon={<AdsClickIcon />}
          label={tag.trim()}
          component={InternalLink}
          to={createTagPageLink(tag)}
          variant="outlined"
          clickable
        />
      ))}
    </Stack>
  );
};
