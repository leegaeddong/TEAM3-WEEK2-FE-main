// 우리가 리덕스에 정보를 넣고싶을때 발생시키는 타입 종류 선언
const ADD = "ADD";

export const ADDTodo = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

const initialState = {
  todo: [
    { id: 0, name: "jiho" },
    { id: 1, name: "charley" },
  ],
};

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        todo: [...state.todo, action.payload],
      };

    default:
      return state;
  }
};

export default todoList;
