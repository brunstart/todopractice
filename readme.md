# ✅ Full-Stack Todo List Project (Java 21)

React(Vite) 프론트엔드와 Spring Boot 백엔드, MySQL 데이터베이스를 연동한 풀스택 할 일 관리 애플리케이션

## 🛠 기술 스택 (Tech Stack)

### 🎨 Frontend

- **Framework**: React (Vite)
- **Routing**: React Router Dom
- **HTTP Client**: Axios
- **Styling**: Inline CSS (Custom Card UI)

### ⚙️ Backend

- **Framework**: Spring Boot 3.5.8
- **JDK**: Eclipse Temurin 21 (LTS)
- **Build Tool**: Gradle
- **Database**: MySQL 8.0
- **ORM**: Spring Data JPA

---

## 📂 프로젝트 구조 (Project Structure)

```
todopractice/
├── .gitignore # 통합 관리 대상 제외 설정
├── README.md # 프로젝트 전체 가이드
├── frontend/ # React (Vite) 프로젝트
│ ├── src/
│ │ ├── assets/ # 정적 자원
│ │ ├── components/ # UI 컴포넌트 (TodoComponent, TodoDetail, TodoItem, TodoList)
│ │ ├── App.css # 전역 스타일링
│ │ ├── App.jsx # 메인 라우팅 및 API 호출 (Axios)
│ │ ├── index.css # 기본 CSS 스타일
│ │ └── main.jsx # React 엔트리 포인트
│ ├── index.html # HTML 메인 템플릿
│ └── package.json # 프론트엔드 의존성 및 스크립트
└── backend/ # Spring Boot 프로젝트
├── src/
│ └── main/java/org/example/backend/
│ ├── config/ # CORS 설정 (WebConfig.java)
│ ├── controller/ # REST API 컨트롤러 (TodoController.java)
│ ├── entity/ # JPA 엔티티 (Todo.java)
│ └── repository/ # JPA 리포지토리 (TodoRepository.java)
├── build.gradle # 백엔드 의존성 (Spring Boot 3.5.8, Java 21)
└── src/main/resources/application.yml # MySQL 및 JPA 설정
```

### Frontend

- `App.jsx`: 전역 상태 관리 및 Axios 비동기 통신 로직 (CRUD)
- `TodoComponent.jsx`: 메인 대시보드 및 할 일 입력 폼
- `TodoItem.jsx`: 개별 할 일 카드 (상세보기 분리 로직 포함)
- `TodoDetail.jsx`: 할 일 상세 정보 수정 및 삭제 화면

### Backend

- `Todo.java`: `todos` 테이블 매핑 엔티티
- `TodoRepository.java`: JPA 리포지토리 인터페이스
- `TodoController.java`: REST API 컨트롤러
- `WebConfig.java`: CORS 설정

---

## 🔗 API 명세서 (API Specifications)

| 기능               |  Method  | Endpoint          | Request Body (JSON)                      | Response        |
| :----------------- | :------: | :---------------- | :--------------------------------------- | :-------------- |
| **전체 목록 조회** |  `GET`   | `/api/todos`      | -                                        | `Todo[]`        |
| **새 할 일 추가**  |  `POST`  | `/api/todos`      | `{"text": String, "completed": boolean}` | `Todo`          |
| **내용/상태 수정** |  `PUT`   | `/api/todos/{id}` | `{"text": String, "completed": boolean}` | `Todo`          |
| **할 일 삭제**     | `DELETE` | `/api/todos/{id}` | -                                        | `void` (200 OK) |

### 📋 데이터 객체 구조 (Todo Entity)

```json
{
  "id": Long,
  "text": "할 일 내용",
  "completed": false
}

```

## 🚀 설정 및 실행 (Getting Started)

### 1. Database 설정 (MySQL)

`application.yml`의 설정값에 따라 데이터베이스를 생성.

```
CREATE DATABASE tododb;
```

- DB URL: jdbc:mysql://localhost:3306/tododb?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=Asia/Seoul&characterEncoding=UTF-8
- Username: todouser
- Password: todo1234
- Driver: com.mysql.cj.jdbc.Driver

### 2. Backend 실행

```
cd backend
./gradlew bootRun
```

- Port: 8080 (기본값)

- JDK: Eclipse Temurin 21 환경에서 실행 권장

- JPA 설정: hibernate.ddl-auto: update 설정으로 인해 엔티티 변경 시 테이블이 자동으로 업데이트됩니다.

- 로그 확인: show-sql: true 및 format_sql: true 설정으로 실행되는 SQL 쿼리를 콘솔에서 확인할 수 있습니다.

### 3. Frontend 실행

```
cd frontend
npm install
npm run dev
```

- Port: 5173 (기본값)

- 접속 주소: http://localhost:5173

## ✨ 주요 특징 및 개발 포인트

### 직관적인 UX: 할 일의 텍스트 영역과 상세 페이지 이동 버튼(상세보기 >)을 분리하여 오클릭을 방지하고 사용성 향상.

### CORS 대응: WebConfig.java 설정을 통해 프론트엔드 포트(5173)의 요청을 백엔드(8080)에서 허용하도록 구성.

### DB 자동화: Hibernate 설정을 통해 SQL 쿼리를 콘솔에 포맷팅하여 출력하며, 데이터 영속성을 보장.
