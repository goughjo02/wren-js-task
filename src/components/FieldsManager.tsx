import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FieldType, SheepType } from "../types";
import Field from "./Field";
import { generateNewSheep } from "../contexts/FieldContext";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@material-ui/core";

const FieldsManager = () => {
  const minSeedSheepVolumne = 0;
  const [seedSheepVolume, setSeedSheepVolume] = useState<number>(
    minSeedSheepVolumne
  );
  const [fields, setFields] = useState<FieldType[]>([]);
  const addField = (event: React.FormEvent) => {
    event.preventDefault();
    const id: string = uuidv4();
    const sheep: SheepType[] = [];
    for (let i = 0; i < seedSheepVolume; i++) {
      const newSheep: SheepType = generateNewSheep(`Sheep ${i + 1}`);
      sheep.push(newSheep);
    }
    const newField = { id, sheep };
    setFields((prevState) => [newField, ...prevState]);
    setSeedSheepVolume(0)
    return false;
  };
  const handleSeedSheepVolumeChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setSeedSheepVolume(Number(value));
  };

  return (
    <Container maxWidth="sm" className={`margin-y`}>
      <Typography variant="h5">Create New Field</Typography>
      <form onSubmit={addField} className={"column margin-y"}>
        <FormControl>
          <TextField
            label="Sheep Seed Volumne"
            value={seedSheepVolume}
            onChange={handleSeedSheepVolumeChange}
            id="seedSheepVolumne"
            name="seedSheepVolumne"
            type="number"
            InputProps={{
              inputProps: {
                min: minSeedSheepVolumne,
              },
            }}
          />
          <FormHelperText id="create-ieldseed-sheep-volue-helper-text">
            The amount of sheep to initialise with the field.
          </FormHelperText>
        </FormControl>
        <div className="margin-y margin-left-auto">
        <Button type="submit" variant="contained" color="secondary">
          Add New Field
        </Button>
        </div>
      </form>
      {fields.map((field) => {
        const { id } = field;
        return <Field key={id} field={field} />;
      })}
    </Container>
  );
};

export default FieldsManager;
