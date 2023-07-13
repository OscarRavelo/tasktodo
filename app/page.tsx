"use client";
import { TasksContext } from "../context/taskContext";
import { useContext } from "react";
import { TaskCard } from "../components/taskCard";
export default function Home() {
  const values = useContext(TasksContext);
  console.log(values);
  return (
    <div>
      {values.map((item) => {
        console.log("item", item);
        return <TaskCard title={item} description={item} key={item} />;
      })}
    </div>
  );
}
