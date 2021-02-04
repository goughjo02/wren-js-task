import React from "react";
import { FieldType } from "../types";
import { FieldProvider } from "../contexts/FieldContext";
import SheepTable from "./SheepTable";
import AddSheep from "./AddSheep";
import BrandRandomSheep from "./BrandRandomSheep";
import EncourageBreeding from "./EncourageBreeding";
import { Container, Typography } from "@material-ui/core";

const Field: React.FC<{ field: FieldType }> = ({ field }) => {
  const { id } = field;
  return (
    <div id={`field-${id}`}>
      <Container maxWidth="sm">
        <Typography variant="h3">Field</Typography>
      </Container>
      <FieldProvider field={field}>
        <AddSheep />
        <BrandRandomSheep />
        <EncourageBreeding />
        <SheepTable />
      </FieldProvider>
    </div>
  );
};

export default Field;
