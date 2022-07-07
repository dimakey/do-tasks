import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllTasksNotCompleted } from "../store/selectors/taskSelectors";
import { selectAllTags } from "../store/selectors/tagsSelectors";

const useTasksByTagParam = () => {
  const { tagID } = useParams();
  const tasks = useSelector(selectAllTasksNotCompleted);
  const allTags = useSelector(selectAllTags);

  const filteredTasks = tasks.filter((t) => {
    return t.tags.findIndex((tag) => tag.id === tagID) !== -1;
  });

  return {
    tag: allTags.find((tag) => tag.id === tagID),
    tasks: filteredTasks,
  };
};

export default useTasksByTagParam;
