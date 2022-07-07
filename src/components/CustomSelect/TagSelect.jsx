import React from "react";
import { useSelector } from "react-redux";
import CustomSelect from "./CustomSelect";
import { selectAllTags } from "../../store/selectors/tagsSelectors";
import { Tag } from "akar-icons";

const TagSelect = ({ selectValue, setSelectValue, ...props }) => {
  const allTags = useSelector(selectAllTags);

  const handleSelectValue = (selected) => {
    setSelectValue(selected);
  };

  const toTagOptions = allTags.map((tag) => ({
    value: tag.id,
    label: tag.title,
  }));

  return (
    <CustomSelect
      icon={<Tag size={20} strokeWidth={1} />}
      placeholder="Sorting"
      options={toTagOptions}
      value={selectValue}
      onChange={handleSelectValue}
      isClearable
      isMulti
      noOptionsMessage={() => "No tags ..."}
      {...props}
    />
  );
};

export default TagSelect;
