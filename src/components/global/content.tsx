import * as React from "react";

import type { HtmlString } from "../../types/interface";

type ContentProps = { content: HtmlString };

export const Content = ({ content }: ContentProps): JSX.Element => {
  return (
    <div
      className="page-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
