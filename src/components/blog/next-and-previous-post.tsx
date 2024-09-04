import * as React from "react";

import Box from "@mui/material/Box";

import { PreviousPostLink, NextPostLink } from "./post-links";
import type { NextAndPreviousPostProps } from "../../types";

export const NextAndPreviousPost = ({
  previousPost,
  nextPost,
}: NextAndPreviousPostProps): JSX.Element => {
  return (
    <Box>
      <PreviousPostLink post={previousPost} />
      <NextPostLink post={nextPost} />
    </Box>
  );
};
