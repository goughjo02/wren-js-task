import React from "react";
import { FieldType } from "../types";
import { FieldProvider } from "../contexts/FieldContext";
import AddSheep from "./AddSheep";
import SheepTable from "./SheepTable";
import BrandRandomSheep from "./BrandRandomSheep";
import EncourageBreeding from "./EncourageBreeding";
import { Typography } from "@material-ui/core";

const Field: React.FC<{ field: FieldType }> = ({ field }) => {
  const { id } = field;
  return (
    <div id={`field-${id}`}>
      <FieldProvider field={field}>
        <Typography variant="h4">A Field Of Sheep</Typography>
        <div className="margin-y">
          <AddSheep />
        </div>
        <div className="row space-around align-center margin-y">
          <BrandRandomSheep />
          <EncourageBreeding />
        </div>
        <SheepTable />
      </FieldProvider>
    </div>
  );
};

export default Field;
