import * as React from "react";

import { GatsbyBrowser } from "gatsby";

import { Page } from "../components/global/page";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <Page>{element}</Page>;
};
