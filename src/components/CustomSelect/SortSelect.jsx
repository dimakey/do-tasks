import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
import { useDispatch } from "react-redux";
import { sortOptions } from "../../utils/constants";
import { changeSortType } from "../../store/slices/taskSlice";
import { ArrowUpDown } from "akar-icons";

const SortSelect = (props) => {
  const [sortValue, setSortValue] = useState(null);
  const dispatch = useDispatch();

  const handleSortValue = (selectedSortValue) => {
    setSortValue(selectedSortValue);

    dispatch(
      changeSortType({
        sortValue: selectedSortValue?.value,
      })
    );
  };

  return (
    <CustomSelect
      icon={<ArrowUpDown size={16} strokeWidth={1.5} />}
      placeholder="Sorting"
      options={sortOptions}
      value={sortValue}
      onChange={handleSortValue}
      isClearable
      {...props}
    />
  );
};

export default SortSelect;
