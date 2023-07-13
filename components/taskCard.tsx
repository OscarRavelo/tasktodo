export const TaskCard = ({ title, description }) => {
  const clickhandler = () => {
    alert("you click ");
  };
  return (
    <div
      onClick={clickhandler}
      className=" flex  flex-col  items-center justify-center border border-green-700"
    >
      <h1 className="text-2xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
};
