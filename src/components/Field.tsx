import React from "react";
import { FieldType } from "../types";
import { FieldProvider } from "../contexts/FieldContext";
import SheepTable from "./SheepTable";
import AddSheep from "./AddSheep";

const Field: React.FC<{ field: FieldType }> = ({ field }) => {
  const { id } = field;
  return (
    <div id={`field-${id}`}>
      <h1>Field</h1>
      <FieldProvider field={field}>
        <AddSheep />
        <SheepTable />
      </FieldProvider>
    </div>
  );
};

export default Field;
