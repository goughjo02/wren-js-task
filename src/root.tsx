import * as React from "react";
import { Container, Divider, Typography } from "@material-ui/core";
import FieldsManager from "./components/FieldsManager";
import { SnackbarProvider } from "./contexts/SnackbarContext";

export class Root extends React.Component {
  render() {
    return (
      <div>
        <SnackbarProvider>
          <Container maxWidth="sm">
            <Typography variant="h4">Wren Kitchen Starter Application</Typography>
          </Container>
          <Divider />
          <FieldsManager />
        </SnackbarProvider>
      </div>
    );
  }
}
