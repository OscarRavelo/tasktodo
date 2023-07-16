"use client";
import { createContext, useState, useContext } from "react";
export const TasksContext = createContext([]);

export const useTasks = () => {
  const context = useContext(TasksContext)
  return context;
}
export const TaskContextProvider = ({ children }) => {
  const arrayTasks = [{ id: '1', title: 'Cleaning', description: 'clean the house ' }, { id: '2', title: 'pay', description: 'pay the rent' }, { id: '3', title: 'understand', description: 'dont say bad words infront of the kids' }];
  const [tasks, setTasks] = useState(arrayTasks)
  const createTask = (newTask) => {
    const idNewTask = { ...newTask, id: tasks.length + 1 }
    setTasks([...tasks, idNewTask])
  }
  return (
    <TasksContext.Provider value={{ tasks, createTask }}>{children}</TasksContext.Provider>
  );
};
