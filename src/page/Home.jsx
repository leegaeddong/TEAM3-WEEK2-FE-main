import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/CountNumber">숫자 올리기</Link>
      <Link to="/AddToDoList">ToDo 추가하기</Link>
      <Link to="/TodoList">ToDo 과제</Link>
    </>
  );
};

export default Home;
