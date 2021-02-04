import * as React from "react";
import FieldsManager from "./components/FieldsManager";
import { SnackbarProvider } from "./contexts/SnackbarContext";

export class Root extends React.Component {
  render() {
    return (
      <div>
        <SnackbarProvider>
          <h1>Hello World</h1>
          <FieldsManager />
        </SnackbarProvider>
      </div>
    );
  }
}
