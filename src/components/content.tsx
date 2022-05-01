import * as React from "react";

type ContentProps = { content: string };

export const Content = ({ content }: ContentProps): JSX.Element => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
