import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADDTodo } from "../redux/modules/addTodo";

const AddToDoList = () => {
  const [text, setText] = useState("");
  const selectorTodo = useSelector((state) => state.todoList.todo);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    const newObj = {
      id: selectorTodo.length + 1,
      name: text,
    };
    dispatch(ADDTodo(newObj));
    setText("");
  };
  return (
    <section>
      <h1>ToDo 추가하기</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onClickHandler}>추가하기</button>
      {selectorTodo.map((v) => {
        return (
          <div key={v.id}>
            <span>{v.id}</span>
            <span>{v.name}</span>
          </div>
        );
      })}
    </section>
  );
};

export default AddToDoList;
