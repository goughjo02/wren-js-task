import React, { useState } from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useField } from "../contexts/FieldContext";
import { SheepType } from "../types";
import EditSheep from "./EditSheep";

const SheepTable = () => {
  const [editSheep, setEditSheep] = useState<SheepType | undefined>(undefined);
  const { id, sheep, updateSheep: contextUpdateSheep } = useField();
  const handleEditClick = (sheepToEdit: SheepType) => {
    setEditSheep(sheepToEdit);
  };
  const updateSheep = (sheepToUpdate: SheepType) => {
    contextUpdateSheep(sheepToUpdate);
    setEditSheep(undefined);
  };
  return (
    <div id={`sheep-table-${id}`} className={`margin-y`}>
      {editSheep && (
        <EditSheep
          open={!!editSheep}
          sheep={editSheep}
          handleClose={() => setEditSheep(undefined)}
          updateSheep={updateSheep}
        />
      )}
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
                  <TableCell>Actions</TableCell>
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
                      <TableCell>
                        <IconButton onClick={() => handleEditClick(e)}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
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
