import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FieldContextType,
  FieldType,
  SheepType,
  SEX,
  SNACK_SEVERITY,
} from "../../types";
import { useSnackbar } from "../SnackbarContext";

export const generateNewSheep = (name: string) => {
  const newSheep: SheepType = {
    id: uuidv4(),
    name,
    sex: Math.random() < 0.5 ? SEX.MALE : SEX.FEMALE,
    branded: false,
  };
  return newSheep;
};

const FieldContext = createContext<FieldContextType>({
  addSheep: (_) => null,
  brandRandomSheep: () => null,
  encourageBreeding: () => null,
  id: "",
  sheep: [],
  setSheep: (_) => null,
});

export const useField = () => useContext(FieldContext);

export const FieldProvider: React.FC<{
  children: React.ReactNode;
  field: FieldType;
}> = ({ children, field }) => {
  const { openSnackbar } = useSnackbar();
  const { id, sheep: seedSheep } = field;
  const [sheep, setSheep] = useState<SheepType[]>([...seedSheep]);
  const addSheep = (name: string, sex?: SEX.MALE | SEX.FEMALE) => {
    const newSheep = generateNewSheep(name);
    if (!!sex) {
      newSheep.sex = sex;
    }
    setSheep((prevState) => [newSheep, ...prevState]);
    return newSheep
  };
  const brandRandomSheep = () => {
    setSheep((prevState) => {
      const unbrandedSheep = prevState.filter((e) => !e.branded);
      if (unbrandedSheep.length < 1) {
        openSnackbar({
          message: `There are no more unbranded sheep to brand`,
          severity: SNACK_SEVERITY.ERROR,
        });
        return [...prevState];
      }
      const randomUnbrandedSheep =
        unbrandedSheep[Math.floor(Math.random() * unbrandedSheep.length)];
      const indexOfRandomSheep = prevState.findIndex(
        (e) => e.id === randomUnbrandedSheep.id
      );
      const newState = [...prevState];
      newState[indexOfRandomSheep].branded = true;
      openSnackbar({
        message: `Branded ${randomUnbrandedSheep.name}`,
        severity: SNACK_SEVERITY.SUCCESS,
      });
      return newState;
    });
  };
  const encourageBreeding = () => {
    const unbrandedSheep = sheep.filter((e) => !e.branded);
    const males = unbrandedSheep.filter((e) => e.sex === SEX.MALE);
    const females = unbrandedSheep.filter((e) => e.sex === SEX.FEMALE);
    const noMales = males.length < 1;
    const noFemales = females.length < 1;
    if (noMales && noFemales) {
      openSnackbar({
        message: `There are not enough male or female sheep to breed.`,
        severity: SNACK_SEVERITY.ERROR,
      });
      return false;
    } else if (noMales) {
      openSnackbar({
        message: `There are not enough male sheep to breed.`,
        severity: SNACK_SEVERITY.ERROR,
      });
      return false;
    } else if (noFemales) {
      openSnackbar({
        message: `There are not enough female sheep to breed.`,
        severity: SNACK_SEVERITY.ERROR,
      });
      return false;
    }
    const randomMale = males[Math.floor(Math.random() * males.length)];
    const randomFemale = females[Math.floor(Math.random() * females.length)];
    const newSheep =
      Math.random() < 0.5 ? undefined : addSheep(`Sheep ${sheep.length + 1}`);
    const { name: maleName } = randomMale;
    const { name: femaleName } = randomFemale;
    if (!newSheep) {
      openSnackbar({
        message: `${maleName} and ${femaleName} attempted to breed, however ${femaleName} did not become pregnant. Breeding was unsuccessful.`,
        severity: SNACK_SEVERITY.WARNING,
      });
      return false;
    } else {
      const { name: newSheepName } = newSheep;
      openSnackbar({
        message: `${maleName} and ${femaleName} got it no and ${femaleName} became pregnant. They have produced off-spring. ${newSheepName} has just been born.`,
        severity: SNACK_SEVERITY.SUCCESS
      });
      return false;
    }
  };
  const { Provider } = FieldContext;
  return (
    <Provider
      value={{
        addSheep,
        brandRandomSheep,
        encourageBreeding,
        id,
        sheep,
        setSheep,
      }}
    >
      {children}
    </Provider>
  );
};
