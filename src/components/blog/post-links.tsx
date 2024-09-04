import * as React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as InternalLink } from "gatsby";

import type { PostButtonProps } from "../../types";

export const PreviousPostLink = ({
  post,
}: PostButtonProps): JSX.Element | null => {
  if (!post) return null;

  return (
    <Box>
      <InternalLink className="blog-link" to={post.fields.slug}>
        <ArrowBackIcon />
        <Typography variant="body1">Previous</Typography>
      </InternalLink>
    </Box>
  );
};

export const NextPostLink = ({ post }: PostButtonProps): JSX.Element | null => {
  if (!post) return null;

  return (
    <Box>
      <InternalLink className="blog-link" to={post.fields.slug}>
        <Typography variant="body1">Next</Typography>
        <ArrowForwardIcon />
      </InternalLink>
    </Box>
  );
};
