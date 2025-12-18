import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function TodoDetail({ todos, deleteTodo, updateTodo }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // URL 파라미터로 넘어온 id와 일치하는 데이터 찾기
  const todo = todos.find((t) => String(t.id) === id);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo ? todo.text : "");

  if (!todo) return <p>항목을 찾을 수 없습니다.</p>;

  const handleDelete = () => {
    deleteTodo(todo.id);
    navigate("/"); // 삭제 후 메인으로 이동
  };

  const handleUpdate = () => {
    if (!editText.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "20px", marginTop: "20px" }}
    >
      <h3>상세 정보</h3>
      {isEditing ? (
        <div>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleUpdate}>저장</button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </div>
      ) : (
        <div>
          <p>내용: {todo.text}</p>
          <button onClick={() => setIsEditing(true)}>수정하기</button>
          <button
            onClick={handleDelete}
            style={{ color: "red", marginLeft: "10px" }}
          >
            삭제하기
          </button>
        </div>
      )}
      <hr />
      <button onClick={() => navigate("/")}>메인화면으로 돌아가기</button>
    </div>
  );
}

export default TodoDetail;
