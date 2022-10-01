import React from "react";
import ItemCard from "../../components/Card/ItemCard";
import { css } from "../../api/data/data";
const GeneratorScreen = () => {
  return (
    <div className="flex flex-wrap justify-center mt-20">
      {css.generator.map((el, i) => (
        <ItemCard url={el} key={i} />
      ))}
    </div>
  );
};

export default GeneratorScreen;
