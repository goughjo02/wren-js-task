import * as React from "react";
import FieldsManager from "./components/FieldsManager";

export class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <FieldsManager />
      </div>
    );
  }
}
