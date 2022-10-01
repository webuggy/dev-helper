import React from "react";
import { css } from "../../api/data/data";
import ItemCard from "../../components/Card/ItemCard";

const ToolsScreen = () => {
  return (
    <div className="flex flex-wrap justify-center mt-20">
      {css.tools.map((el, i) => (
        <ItemCard url={el} key={i} />
      ))}
    </div>
  );
};

export default ToolsScreen;
