import React, { ChangeEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { SheepType } from "../types";

const EditSheep: React.FC<{
  open: boolean;
  handleClose: () => void;
  updateSheep: (sheep: SheepType) => void;
  sheep: SheepType;
}> = ({ open, handleClose, updateSheep, sheep }) => {
  const { name: sheepName } = sheep;
  const [name, setName] = useState<string>(sheepName);
  const save = () => {
    updateSheep({
      ...sheep,
      name,
    });
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="edit-sheep">
      <DialogTitle id="edit-sheep-title">Edit Sheep</DialogTitle>
      <DialogContent>
        <DialogContentText>Edit Sheep Name</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={save} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditSheep;
