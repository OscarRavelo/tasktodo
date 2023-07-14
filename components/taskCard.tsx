export const TaskCard = ({ title, description }) => {
  const clickhandler = () => {
    alert("you click ");
  };
  const buttonClickHandler = (e) => {
    confirm('click in the button')
    e.stopPropagation()
  }
  return (
    <div
      onClick={clickhandler}
      className=" flex  flex-col  items-center justify-center border border-green-800"
    >
      <h1 className="text-2xl">{title}</h1>
      <p>{description}</p>
      <button className=" bg-green-400 py-1 px-3 border-white border rounded " onClick={buttonClickHandler}>edit</button>
    </div>
  );
};
