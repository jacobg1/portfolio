import * as React from "react";
import { Page } from "./page";
import theme from "../theme";

type ElProps = {
  element: JSX.Element;
};

export default function provideTheme({ element }: ElProps): JSX.Element {
  return <Page theme={theme}>{element}</Page>;
}
