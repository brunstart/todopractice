import { useState } from "react";
import TodoList from "./TodoList";

function TodoComponent({ todos, addTodo, toggleTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "1.2rem", color: "#FFF" }}>
        할 일 목록
      </h2>

      {/* 입력 폼 중앙 정렬 및 디자인 개선 */}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          추가
        </button>
      </form>

      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoComponent;
