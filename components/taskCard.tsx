import { useRouter } from "next/navigation"
export const TaskCard = ({ title, description, id }) => {
  const router = useRouter()

  const buttonClickHandler = (e) => {
    confirm('click in the button')
    e.stopPropagation()
  }
  return (
    <div
      onClick={() => router.push(`/edit/${id}`)}
      className=" flex  flex-col  items-center justify-center border border-green-800"
    >
      <h1 className="text-2xl">{title}</h1>
      <p>{description}</p>
      <button className=" bg-green-400 py-1 px-3 border-white border rounded " onClick={buttonClickHandler}>edit</button>
    </div>
  );
};
