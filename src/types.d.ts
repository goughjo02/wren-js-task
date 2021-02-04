export interface SheepType {
  id: string;
  name: string;
  sex: "MALE" | "FEMALE";
  branded: boolean;
}

export interface FieldContextType {
  addSheep: (name: string, sex?:"MALE" | "FEMALE") => void;
  id: string;
  sheep: SheepType[];
  setSheep: (sheep: SheepType[]) => void;
}

export interface FieldType {
  id: string;
  sheep: SheepType[];
}
