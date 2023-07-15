"use client";
import { TasksContext } from "../context/taskContext";
import { useContext } from "react";
import { TaskCard } from "../components/taskCard";
export default function Home() {
  const values = useContext(TasksContext);
  return (
    <div>
      {values.map((item) => {
        return <TaskCard title={item.title} description={item.description} key={item.id} />;
      })}
    </div>
  );
}
