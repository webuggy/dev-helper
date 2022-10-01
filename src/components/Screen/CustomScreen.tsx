import React from "react";
import { ScreenComponentList, ScreenComponents } from "../../util/screen-list";

interface Prop {
  component: ScreenComponentList;
}

export const CustomScreen = ({ component }: Prop) => {
  return React.createElement(ScreenComponents[component || "ReactUILibraries"]);
};
