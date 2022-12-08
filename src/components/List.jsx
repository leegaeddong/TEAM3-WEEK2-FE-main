import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

export const List = () => {
  const TodoList = useSelector((state) => state.Todo.todo);
  return (
    <ListSection>
      <ListIsDone>Working..</ListIsDone>
      <ul>
        {TodoList.filter((todo) => !todo.isDone).map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              content={todo.content}
              isDone={todo.isDone}
            />
          );
        })}
      </ul>
      <ListIsDone>Done</ListIsDone>
      <ul>
        {TodoList.filter((todo) => todo.isDone).map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              content={todo.content}
              isDone={todo.isDone}
            />
          );
        })}
      </ul>
    </ListSection>
  );
};

const ListSection = styled.section`
  padding: 0 1rem;
  margin-top: 1rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const ListIsDone = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;
