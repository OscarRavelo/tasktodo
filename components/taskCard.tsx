import { useRouter } from "next/navigation"
import { useTasks } from "@/context/taskContext"
export const TaskCard = ({ title, description, id }) => {
  const router = useRouter()


  const { deleteTask } = useTasks()

  const buttonClickHandler = (e) => {

    e.stopPropagation()
    if (confirm('Are you sure you wanna delete the task?') === true) {

      deleteTask(id)
    }
  }
  return (
    <div
      onClick={() => router.push(`/edit/${id}`)}
      className=" flex  flex-col  items-center justify-center border border-green-800"
    >
      <h1 className="text-2xl">{title}</h1>
      <p>{description}</p>
      <button className=" bg-green-400 py-1 px-3 border-white border rounded " onClick={buttonClickHandler}>delete</button>
    </div>
  );
};
