import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FieldType, SheepType } from "../types";
import Field from "./Field";
import { generateNewSheep } from "../contexts/FieldContext"

const FieldsManager = () => {
  const minSeedSheepVolumne = 2;
  const [seedSheepVolume, setSeedSheepVolumne] = useState<number>(
    minSeedSheepVolumne
  );
  const [fields, setFields] = useState<FieldType[]>([]);
  const addField = (event: React.FormEvent) => {
    event.preventDefault();
    const id: string = uuidv4();
    const sheep: SheepType[] = [];
    for (let i = 0; i < seedSheepVolume; i++) {
      const newSheep: SheepType = generateNewSheep(`Sheep ${i + 1}`)
      sheep.push(newSheep);
    }
    const newField = { id, sheep };
    setFields((prevState) => [newField, ...prevState]);
    return false;
  };
  const handleSeedSheepVolumeChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setSeedSheepVolumne(Number(value));
  };

  return (
    <div>
      <form onSubmit={addField}>
        <label htmlFor="seedSheepVolumne">Seed Volumne Of Sheep:</label>
        <input
          value={seedSheepVolume}
          onChange={handleSeedSheepVolumeChange}
          id="seedSheepVolumne"
          name="seedSheepVolumne"
          type="number"
          min={minSeedSheepVolumne}
        />
        <button type="submit">Add Field</button>
      </form>
      {fields.map((field) => {
        const { id } = field;
        return <Field key={id} field={field} />;
      })}
    </div>
  );
};

export default FieldsManager;
