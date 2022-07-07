import { nanoid } from "@reduxjs/toolkit";
import { getUnixTime, subDays, addDays } from "date-fns";
import { priorityTypes, sortTypes } from "../utils/constants";

export default {
  taskList: [
    {
      id: nanoid(),
      description:
        "Today. Create your first task using button 'Add a task'. Task is featured",
      dateDue: getUnixTime(new Date()),
      isComplete: false,
      isFeatured: false,
      priority: priorityTypes.HIGH_PRIORITY,
      tags: [
        {
          id: "3",
          title: "project name",
        },
      ],
    },
    {
      id: "123",
      description: "Today two. Add a task'. Task is featured",
      dateDue: getUnixTime(subDays(new Date(), 1)),
      isComplete: true,
      isFeatured: true,
      priority: priorityTypes.HIGH_PRIORITY,
      tags: [],
    },
    {
      id: nanoid(),
      description: "Overdue. SubDays testing overdue filter",
      dateDue: getUnixTime(subDays(new Date(), 1)),
      isComplete: false,
      isFeatured: true,
      priority: priorityTypes.MID_PRIORITY,
      tags: [
        {
          id: "3",
          title: "project name",
        },
        {
          id: "2",
          title: "warning",
        },
      ],
    },
    {
      id: nanoid(),
      description:
        "Add 3 days. Now we can use the React-Redux hooks to let React",
      dateDue: getUnixTime(addDays(new Date(), 14)),
      isComplete: false,
      isFeatured: false,
      priority: priorityTypes.LOW_PRIORITY,
      tags: [],
    },
  ],
  currentSortType: sortTypes.DEFAULT,
};
