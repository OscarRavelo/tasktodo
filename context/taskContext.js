"use client";
import { createContext, useState, useContext } from "react";
export const TasksContext = createContext([]);

export const useTasks = () => {
  const context = useContext(TasksContext)
  return context;
}
export const TaskContextProvider = ({ children }) => {


  const [tasks, setTasks] = useState([]);


  const createTask = (newTask) => {
    const idNewTask = { ...newTask, id: (tasks.length + 1).toString() }
    setTasks([...tasks, idNewTask])
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }
  const editTask = (oldTask) => {
    const newTasks = tasks.map(task => oldTask.id === task.id ? oldTask : task)
    setTasks(newTasks)
  }
  return (
    <TasksContext.Provider value={{ tasks, createTask, deleteTask, editTask }}>{children}</TasksContext.Provider>
  );
};
