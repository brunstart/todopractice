import { Link } from "react-router-dom";

function TodoItem({ todo, toggleTodo }) {
  // 1. 카드 전체 스타일
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fdfdfd",
    border: "1px solid #eee",
    borderRadius: "12px",
    padding: "12px 15px",
    marginBottom: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  };

  // 2. 텍스트와 버튼을 배치할 컨테이너 스타일 (Link 대신 일반 div 사용)
  const contentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: "10px",
  };

  // 3. 할 일 텍스트 스타일
  const todoTextStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
    color: todo.completed ? "#aaa" : "#333",
    fontWeight: "500",
    fontSize: "1rem",
  };

  // 4. 상세보기 링크 스타일 (이제 여기에만 Link 적용)
  const detailLinkStyle = {
    fontSize: "0.85rem",
    color: "#007bff",
    fontWeight: "600",
    textDecoration: "none", // 링크 기본 밑줄 제거
    padding: "4px 8px",
  };

  return (
    <li style={cardStyle}>
      {/* 체크박스 */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        style={{ width: "20px", height: "20px", cursor: "pointer" }}
      />

      {/* 내용 영역: Link를 제거하고 일반 div로 감쌉니다 */}
      <div style={contentStyle}>
        {/* 할 일 텍스트: 클릭해도 아무런 반응이 없습니다 */}
        <span style={todoTextStyle}>{todo.text}</span>

        {/* 상세보기: 오직 이 버튼을 눌렀을 때만 상세페이지로 이동합니다 */}
        <Link to={`/todo/${todo.id}`} style={detailLinkStyle}>
          상세보기 &gt;
        </Link>
      </div>
    </li>
  );
}

export default TodoItem;
