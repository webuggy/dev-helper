import { default as ReactUILibraries } from "../screens/React/UILibrariesScreen";
import { default as CssGeneratorScreen } from "../screens/Css/GeneratorScreen";
import { default as VueUILibrariesScreen } from "../screens/Vue/UILibrariesScreen";
import { default as CssToolsScreen } from "../screens/Css/ToolsScreen";

export type ScreenComponentList =
  | "ReactUILibraries"
  | "CssGeneratorScreen"
  | "VueUILibrariesScreen"
  | "CssToolsScreen";

export const ScreenComponents = {
  ReactUILibraries,
  CssGeneratorScreen,
  VueUILibrariesScreen,
  CssToolsScreen,
};
