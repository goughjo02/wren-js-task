import React from "react";
import { useField } from "../contexts/FieldContext";

const SheepTable = () => {
  const { id, sheep } = useField();
  return (
    <div id={`sheep-table-${id}`}>
      <h2>Sheep Census</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sex</th>
            <th>Branded</th>
          </tr>
        </thead>
        <tbody>
          {sheep.map((e) => {
            const { branded, id: sheepId, name, sex } = e;
            return (
              <tr key={`sheep-table-row-${sheepId}`}>
                <td>{name}</td>
                <td>{sex}</td>
                <td>{branded.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SheepTable;
