export interface SheepType {
  id: string;
  name: string;
  sex: SEX;
  branded: boolean;
}

export interface FieldContextType {
  addSheep: (name: string, sex?: SEX) => void;
  brandRandomSheep: () => void;
  encourageBreeding: () => void;
  id: string;
  sheep: SheepType[];
  setSheep: (sheep: SheepType[]) => void;
}

export interface FieldType {
  id: string;
  sheep: SheepType[];
}

declare const enum SEX {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

declare const enum SNACK_SEVERITY {
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  SUCCESS = "success",
}
declare type SnackBarMessageInputType = {
  message: string;
  severity?: SNACK_SEVERITY;
};

declare type SnackbarContextType = {
  openSnackbar: (input: SnackBarMessageInputType) => void;
  setOpen: (open: boolean) => void;
};
