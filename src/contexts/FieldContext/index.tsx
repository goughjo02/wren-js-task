import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FieldContextType, FieldType, SheepType } from "../../types";

export const generateNewSheep = (name: string) => {
  const newSheep: SheepType = {
    id: uuidv4(),
    name,
    sex: Math.random() < 0.5 ? "MALE" : "FEMALE",
    branded: false,
  };
  return newSheep;
};

const FieldContext = createContext<FieldContextType>({
  addSheep: (_) => null,
  brandRandomSheep: () => null,
  id: "",
  sheep: [],
  setSheep: (_) => null,
});

export const useField = () => useContext(FieldContext);

export const FieldProvider: React.FC<{
  children: React.ReactNode;
  field: FieldType;
}> = ({ children, field }) => {
  const { id, sheep: seedSheep } = field;
  const [sheep, setSheep] = useState<SheepType[]>([...seedSheep]);
  const addSheep = (name: string, sex?: "MALE" | "FEMALE") => {
    const newSheep = generateNewSheep(name);
    if (!!sex) {
      newSheep.sex = sex;
    }
    setSheep((prevState) => [newSheep, ...prevState]);
  };
  const brandRandomSheep = () => {
    setSheep((prevState) => {
      const unbrandedSheep = prevState.filter((e) => !e.branded);
      if (unbrandedSheep.length < 1) {
        return [...prevState]
      }
      const randomUnbrandedSheep =
        unbrandedSheep[Math.floor(Math.random() * unbrandedSheep.length)];
      const indexOfRandomSheep = prevState.findIndex(
        (e) => e.id === randomUnbrandedSheep.id
      );
      const newState = [...prevState];
      newState[indexOfRandomSheep].branded = true;
      return newState;
    });
  };
  const { Provider } = FieldContext;
  return (
    <Provider
      value={{
        addSheep,
        brandRandomSheep,
        id,
        sheep,
        setSheep,
      }}
    >
      {children}
    </Provider>
  );
};
