import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
