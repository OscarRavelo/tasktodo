"use client";
import { createContext } from "react";

export const TasksContext = createContext([]);

export const TaskContextProvider = ({ children }) => {
  const TasksLists = [{ id: '1', title: 'Cleaning', description: 'clean the house ' }, { id: '2', title: 'pay', description: 'pay the rent' }, { id: '3', title: 'understand', description: 'dont say bad words infront of the kids' }];
  return (
    <TasksContext.Provider value={TasksLists}>{children}</TasksContext.Provider>
  );
};
