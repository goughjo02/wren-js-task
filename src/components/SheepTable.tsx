import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useField } from "../contexts/FieldContext";

const SheepTable = () => {
  const { id, sheep } = useField();
  return (
    <div id={`sheep-table-${id}`} className={`margin-y`}>
      {sheep.length > 0 ? (
        <>
          <Typography variant="h5">Sheep Population</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Sex</TableCell>
                  <TableCell>Branded</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sheep.map((e) => {
                  const { branded, id: sheepId, name, sex } = e;
                  return (
                    <TableRow
                      key={`sheep-table-row-${sheepId}`}
                      className={branded ? "branded" : ""}
                    >
                      <TableCell>{name}</TableCell>
                      <TableCell>{sex}</TableCell>
                      <TableCell>{branded.toString()}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <p>There are no Sheep yet. Please create one.</p>
      )}
    </div>
  );
};

export default SheepTable;
