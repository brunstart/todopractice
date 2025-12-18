import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import TodoComponent from "./components/TodoComponent";
import TodoDetail from "./components/TodoDetail";

const API_BASE_URL = "http://localhost:8080/api/todos";

function App() {
  const [todos, setTodos] = useState([]);

  // 투두 추가 (POST)
  const addTodo = async (text) => {
    const response = await axios.post(API_BASE_URL, {
      text: text,
      completed: false,
    });
    setTodos([...todos, response.data]); // 서버가 DB에 저장 후 돌려준 데이터 추가
  };

  // 투두 삭제 (DELETE)
  const deleteTodo = async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 투두 수정 (PUT)
  const updateTodo = async (id, newText) => {
    const todoToUpdate = todos.find((t) => t.id === id);
    const response = await axios.put(`${API_BASE_URL}/${id}`, {
      ...todoToUpdate,
      text: newText,
    });
    setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
  };

  // 투두 토글 (PUT)
  const toggleTodo = async (id) => {
    const todoToToggle = todos.find((t) => t.id === id);
    const response = await axios.put(`${API_BASE_URL}/${id}`, {
      ...todoToToggle,
      completed: !todoToToggle.completed,
    });
    setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
  };

  const containerStyle = {
    maxWidth: "500px", // 앱의 최대 너비를 제한 (모바일 앱 느낌)
    margin: "0 auto", // 좌우 여백을 똑같이 나눠 가져서 가운데로 배치
    padding: "40px 20px",
    minHeight: "100vh", // 화면 높이만큼 확보
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get(API_BASE_URL);
    setTodos(response.data);
  };

  return (
    <Router>
      <div style={containerStyle}>
        <h1
          style={{
            textAlign: "center",
            color: "#FFFFFF",
            marginBottom: "30px",
          }}
        >
          My Todo App
        </h1>
        <Routes>
          <Route
            path="/"
            element={
              <TodoComponent
                todos={todos}
                addTodo={addTodo}
                toggleTodo={toggleTodo} // 토글 함수 전달 확인
              />
            }
          />
          <Route
            path="/todo/:id"
            element={
              <TodoDetail
                todos={todos}
                deleteTodo={deleteTodo} // 삭제 함수 전달 확인
                updateTodo={updateTodo} // 수정 함수 전달 확인
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
