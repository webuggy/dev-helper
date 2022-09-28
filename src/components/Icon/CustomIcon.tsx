import React from "react";
import { IconComponentList, IconComponents } from "../../util/icon-list";

interface Prop {
  icon: IconComponentList;
  iconSize: number;
}

const CustomIcon = ({ icon, iconSize }: Prop) => {
  return React.createElement(IconComponents[icon || "BiLibrary"], {
    size: iconSize,
  });
};

export default CustomIcon;
