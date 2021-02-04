import React from "react";
import { Button } from "@material-ui/core";
import { useField } from "../contexts/FieldContext";

const EncourageBreeding = () => {
  const { encourageBreeding, id } = useField();
  return (
    <Button
      id={`encourage-breeding-${id}`}
      type="button"
      variant="outlined"
      onClick={encourageBreeding}
      color="primary"
    >
      Encourage Breeding
    </Button>
  );
};

export default EncourageBreeding;
