const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
  return (
    <li className={"relative bg-white border-2 rounded my-3 p-2 last:mb-10"}>
      {todo.content}
      <div className={"flex justify-end gap-2"}>
        <button className={"btn"} onClick={handleToggleTodoListItemStatus}>
          {todo.done ? "未完了リストへ" : "完了リストへ"}
        </button>
        <button className={"btn"} onClick={handleDeleteTodoListItem}>
          削除
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
