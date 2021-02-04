import React from "react";
import { useField } from "../contexts/FieldContext";

const EncourageBreeding = () => {
  const { encourageBreeding, id } = useField();
  return (
    <div id={`encourage-breeding-${id}`}>
      <button type="button" onClick={encourageBreeding}>
        Encourage Breeding
      </button>
    </div>
  );
};

export default EncourageBreeding