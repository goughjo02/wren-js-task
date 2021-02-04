import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { useField } from "../contexts/FieldContext";
import { SEX } from "../types";

const AddSheep = () => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState<SEX | "random">("random");
  const { addSheep, id, sheep } = useField();
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addSheep(
      name ? name : `Sheep ${sheep.length + 1}`,
      sex === "random" ? undefined : sex
    );
    setName("")
    return false;
  };
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };
  const handleSexChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as { value: SEX | "random" };
    setSex(value);
  };
  return (
    <div id={`add-sheep-field-${id}`} className={`margin-y`}>
      <h6>Create New Sheep</h6>
      <form className="column" onSubmit={handleFormSubmit}>
        <FormControl style={{ marginBottom: "16px" }}>
          <TextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            id={`new-sheep-name-${id}`}
            name="newSheepName"
          />
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Sex</FormLabel>
          <RadioGroup
            aria-label="sex"
            name="sex"
            value={sex}
            onChange={handleSexChange}
          >
            <FormControlLabel
              value={SEX.MALE}
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              value={SEX.FEMALE}
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value={"random"}
              control={<Radio />}
              label="Random"
            />
          </RadioGroup>
        </FormControl>
        <div className="row justify-end margin-y">
          <Button variant="contained" type="submit" color="primary">
            Add Sheep
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddSheep;
