"use client";
import { createContext } from "react";

export const TasksContext = createContext([]);

export const TaskContextProvider = ({ children }) => {
  const TasksLists = [1, 2, 3];
  return (
    <TasksContext.Provider value={TasksLists}>{children}</TasksContext.Provider>
  );
};
