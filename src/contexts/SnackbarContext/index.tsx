import React, { useState, createContext, useContext } from "react";
import Snackbar, { SnackbarCloseReason } from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {
  SNACK_SEVERITY,
  SnackBarMessageInputType,
  SnackbarContextType,
} from "../../types";

const SnackBarContext = createContext<SnackbarContextType>({
  openSnackbar: ({}: SnackBarMessageInputType) => null,
  setOpen: (_: boolean) => null
});

export const useSnackbar = () => useContext(SnackBarContext);

export const SnackbarProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<SNACK_SEVERITY>(SNACK_SEVERITY.INFO);

  const openSnackbar = ({ message, severity }: SnackBarMessageInputType) => {
    if (!severity) {
      setSeverity(SNACK_SEVERITY.INFO);
    } else {
      setSeverity(severity);
    }
    setMessage(message);
    setOpen(true)
  };
  const handleClose = (
    _event: React.SyntheticEvent,
    reason: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <SnackBarContext.Provider value={{ openSnackbar, setOpen }}>
      <>
        {children}
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <MuiAlert
            severity={severity}
            onClose={() => {
              setOpen(false);
            }}
            elevation={6}
            variant="filled"
          >
            {message}
          </MuiAlert>
        </Snackbar>
      </>
    </SnackBarContext.Provider>
  );
};
