const TodoAdd = ({ inputEl, handleAddTodoListItem }) => {
  return (
    <>
      <textarea
        ref={inputEl}
        className={"w-full border-2 rounded p-1 mb-2"}
        placeholder={"ADD TODO"}
      ></textarea>
      <button
        className={"btn bg-blue-400 text-white mx-auto mb-10"}
        onClick={handleAddTodoListItem}
      >
        + TODOを追加
      </button>
    </>
  );
};
export default TodoAdd;
