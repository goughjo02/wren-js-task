import React from "react";
import { useField } from "../contexts/FieldContext";

const BrandRandomSheep = () => {
  const { brandRandomSheep, id } = useField();
  return (
    <div id={`brand-random-sheep-${id}`}>
      <button type="button" onClick={brandRandomSheep}>
        Brand Random Sheep
      </button>
    </div>
  );
};

export default BrandRandomSheep
