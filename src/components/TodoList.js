import TodoItem from "./TodoItem";
import TodoTitle from "./TodoTitle";

const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  as,
  title,
}) => {
  return (
    <>
      <TodoTitle as={as} title={title} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            toggleTodoListItemStatus={toggleTodoListItemStatus}
            deleteTodoListItem={deleteTodoListItem}
          />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
