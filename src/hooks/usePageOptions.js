import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllTags } from "../store/selectors/tagsSelectors";
import { addDays } from "date-fns";
import { useMemo } from "react";

const usePageOptions = () => {
  const { pathname } = useLocation();
  const { tagID } = useParams();
  const allTags = useSelector(selectAllTags);

  const defaultOptions = {
    date: null,
    tag: [],
    isFeatured: false,
  };

  const currentPage = pathname.split("/")[1];

  return useMemo(() => {
    switch (currentPage) {
      case "today":
        return {
          ...defaultOptions,
          date: new Date(),
        };
      case "upcoming":
        return {
          ...defaultOptions,
          date: addDays(new Date(), 7),
        };
      case "featured":
        return {
          ...defaultOptions,
          isFeatured: true,
        };
      case "tag":
        return {
          ...defaultOptions,
          tag: allTags.filter((tag) => tag.id === tagID),
        };
      default:
        return defaultOptions;
    }
  }, [pathname]);
};

export default usePageOptions;
