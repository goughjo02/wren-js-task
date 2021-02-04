export interface SheepType {
  id: string;
  name: string;
  sex: SEX;
  branded: boolean;
}

export interface FieldContextType {
  addSheep: (name: string, sex?: SEX) => void;
  brandRandomSheep: () => void;
  id: string;
  sheep: SheepType[];
  setSheep: (sheep: SheepType[]) => void;
}

export interface FieldType {
  id: string;
  sheep: SheepType[];
}

declare const enum SEX {
  MALE="MALE",
  FEMALE="FEMALE"
}
