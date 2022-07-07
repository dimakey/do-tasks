import { Flag } from "akar-icons";
import React from "react";

import { priorityOptions } from "../../utils/constants";
import CustomSelect from "./CustomSelect";

const PrioritySelect = ({ selectValue, setSelectValue, ...props }) => {
  const handlePriorityChange = (selectedPriorityValue) => {
    setSelectValue(selectedPriorityValue);
  };

  return (
    <CustomSelect
      icon={<Flag size={20} strokeWidth={1} />}
      options={priorityOptions}
      value={selectValue}
      onChange={handlePriorityChange}
      isClearable
      {...props}
    />
  );
};

export default PrioritySelect;
