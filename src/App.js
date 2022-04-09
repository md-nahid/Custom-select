import React from "react";
import Select from "./Select/Select";
// icon
import { Icon } from "@iconify/react";
export default function App() {
  const options = [
    {
      label: "Select1",
      value: "select1",
      selected: true,
    },
    {
      label: "Select2",
      value: "select2",
      selected: false,
    },
  ];
  return (
    <div>
      <Select
        options={options}
        dropdownIcon={<Icon icon="ant-design:caret-down-filled" />}
      />
    </div>
  );
}
