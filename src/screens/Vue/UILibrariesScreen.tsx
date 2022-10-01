import React from "react";
import ItemCard from "../../components/Card/ItemCard";
import { vue } from "../../api/data/data";
const UILibraries = () => {
  return (
    <div className="flex flex-wrap justify-center mt-20">
      {vue.uiLibrary.map((el, i) => (
        <ItemCard url={el} key={i} />
      ))}
    </div>
  );
};

export default UILibraries;
