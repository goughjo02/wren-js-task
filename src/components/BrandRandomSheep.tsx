import React from "react";
import { Button } from "@material-ui/core";
import { useField } from "../contexts/FieldContext";

const BrandRandomSheep = () => {
  const { brandRandomSheep, id } = useField();
  return (
    <Button
      id={`brand-random-sheep-${id}`}
      type="button"
      variant="outlined"
      onClick={brandRandomSheep}
      color="primary"
    >
      Brand Random Sheep
    </Button>
  );
};

export default BrandRandomSheep;
