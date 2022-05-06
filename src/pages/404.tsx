import * as React from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <title>Not found</title>
      <Link to="/">Go home</Link>.
    </>
  );
};

export default NotFoundPage;
