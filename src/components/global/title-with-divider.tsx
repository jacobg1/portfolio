import * as React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export function TitleWithDivider({ title }: { title: string }): JSX.Element {
  return (
    <>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "35px" },
          paddingBottom: "5px",
        }}
        variant="h2"
      >
        {title}
      </Typography>
      <Divider style={{ maxWidth: "800px" }} className="divider" />
    </>
  );
}
