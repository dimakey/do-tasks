import {Cross, Search} from "akar-icons";
import {debounce} from "lodash";
import React, {useEffect, useMemo, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import IconButton from "../IconButton/IconButton";
import * as S from "./HeaderSearch.styled";

const HeaderSearch = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes("/search")) {
      setValue("");
    }
  }, [navigate]);

  const navigateDebounce = useMemo(() => {
    return debounce(navigate, 250);
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);

    if (e.target.value) {
      navigateDebounce(`/search/${e.target.value}`);
    } else {
      navigate("/inbox");
    }
  };

  const handleClear = () => {
    navigate("/inbox");
    setValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${value}`);
  };

  return (
    <S.SearchForm onSubmit={handleSubmit}>
      <S.SearchIcon>
        <Search size={20}/>
      </S.SearchIcon>

      <S.SearchInput
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />

      {value && (
        <IconButton
          variant="text"
          as="span"
          circle
          onClick={handleClear}
          type="reset"
          disableHover
        >
          <Cross size={16}/>
        </IconButton>
      )}
    </S.SearchForm>
  );
};

export default HeaderSearch;
