const TodoTitle = ({ title, as }) => {
  if (as === "h1")
    return <h1 className={"text-3xl font-bold mb-3"}>{title}</h1>;

  if (as === "h2")
    return <h2 className={"text-3xl font-bold mt-2 mb-3"}>{title}</h2>;

  return <p>{title}</p>;
};
export default TodoTitle;
