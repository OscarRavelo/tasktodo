"use client"

import { useState, useEffect } from "react"
import { useTasks } from "@/context/taskContext"
import { useRouter } from "next/navigation"
export const TaskForm = ({ id }) => {
  const router = useRouter()
  const { createTask, tasks, editTask } = useTasks()
  const [task, setTask] = useState({ id: "", title: "", description: "" })
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (id) {
      editTask(task);
      router.push('/');
    } else {
      createTask(task)
      router.push('/')
    }
  }
  useEffect(() => {
    if (id) {
      const task = tasks.find((task) => task.id === id)
      setTask(task)
    }
  }, [id])
  const onChangeHandler = (e) => {
    if (id !== "") {
      const task = tasks.find((task) => task.id === id)
      setTask(task)
    }
    setTask({ ...task, [e.target.name]: e.target.value })
  }
  return (<div>




    <form onSubmit={onSubmitHandler} className="  text-black  flex flex-col  items-center justify-center border border-green-800" onSubmit={onSubmitHandler}>

      <input onChange={onChangeHandler} value={task.title} name="title" className="mb-8" placeholder="enter your title" />
      <input onChange={onChangeHandler} value={task.description} name="description" placeholder="enter your description" />
      <button className=" bg-green-400 py-1 px-3 border-white border rounded " > {id ? 'edit' : 'Create Task'}</button>
    </form>
  </div>)
}
