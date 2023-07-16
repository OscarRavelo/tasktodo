"use client"

import { TaskForm } from "@/components/taskForm";

const page = ({ params }) => {
  return (
    <TaskForm id={params.id} />
  )
}

export default page;
