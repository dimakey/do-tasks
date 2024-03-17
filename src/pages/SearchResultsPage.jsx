import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../store/selectors/taskSelectors";
import { Search } from "akar-icons";
import React from "react";
import BasePage from "../components/BasePage/BasePage";

const SearchResultsPage = () => {
  const { searchValue } = useParams();
  const searchTasks = useSelector(selectAllTasks);
  const filteredTasks = searchTasks.filter((t) =>
    t.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  const title = `Search "${searchValue}"`;

  return (
    <BasePage
      tasks={filteredTasks}
      title={title}
      icon={<Search />}
      options={{
        hasSort: false,
        hasTasksCount: false,
        hasAddTaskInput: false,
        isSearchPage: true,
      }}
    />
  );
};

export default SearchResultsPage;
