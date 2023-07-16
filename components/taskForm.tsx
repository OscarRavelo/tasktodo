"use client"

import { useState } from "react"
import { useTasks } from "@/context/taskContext"
import { useRouter } from "next/navigation"
export const TaskForm = () => {
  const router = useRouter()
  const { createTask } = useTasks()
  const [task, setTask] = useState({ id: "", title: "", description: "" })
  const onSubmitHandler = (e) => {
    e.preventDefault()
    createTask(task)
    router.push('/')
  }

  const onChangeHandler = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }
  return (<div>




    <form onSubmit={onSubmitHandler} className="  flex flex-col  items-center justify-center border border-green-800" onSubmit={onSubmitHandler}>

      <input onChange={onChangeHandler} name="title" className="mb-8" placeholder="enter your title" />
      <input onChange={onChangeHandler} name="description" placeholder="enter your description" />
      <button className=" bg-green-400 py-1 px-3 border-white border rounded " >Create Task</button>
    </form>
  </div>)
}

