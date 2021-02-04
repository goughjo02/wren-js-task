import React, { ChangeEvent, useState } from "react";
import { useField } from "../contexts/FieldContext";
import { SEX } from "../types"

const AddSheep = () => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState<SEX | undefined>(undefined);
  const { addSheep, id, sheep } = useField();
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addSheep(name ? name : `Sheep ${sheep.length + 1}`, sex);
    return false;
  };
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };
  const handleSexChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as { value: SEX };
    setSex(value ? value : undefined);
  };
  return (
    <div id={`add-sheep-field-${id}`}>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor={`new-sheep-name-${id}`}>Name</label>
        <input
          value={name}
          onChange={handleNameChange}
          id={`new-sheep-name-${id}`}
          name="newSheepName"
        />
        <input
          type="radio"
          id={`new-male-sheep-${id}`}
          name="sex"
          value={SEX.MALE}
          checked={sex === SEX.MALE}
          onChange={handleSexChange}
        />
        <label htmlFor={`new-male-sheep-${id}`}>Male</label>
        <input
          type="radio"
          id={`new-female-sheep-${id}`}
          name="sex"
          value={SEX.FEMALE}
          checked={sex === SEX.FEMALE}
          onChange={handleSexChange}
        />
        <label htmlFor={`new-female-sheep-${id}`}>Female</label>
        <input
          type="radio"
          id={`new-random-sex-sheep-${id}`}
          name="sex"
          value={undefined}
          checked={sex === undefined}
          onChange={handleSexChange}
        />
        <label htmlFor={`new-random-sex-sheep-${id}`}>Random</label>
        <button type="submit">Add Sheep</button>
      </form>
    </div>
  );
};

export default AddSheep;
