import TodoList from "./TodoList";
import TodoTitle from "./TodoTitle";
import TodoAdd from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";
import { useRef } from "react";

function App() {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      <div className={"block max-w-[700px] mx-auto p-5 bg-gray-100"}>
        <TodoTitle title="TODO進捗管理" as="h1" />
        <TodoAdd
          inputEl={inputEl}
          handleAddTodoListItem={handleAddTodoListItem}
        />
        <TodoList
          todoList={inCompletedList}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          as="h2"
          title="未完了TODOリスト"
        />
        <TodoList
          todoList={completedList}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          as="h2"
          title="完了TODOリスト"
        />
      </div>
    </>
  );
}
export default App;
