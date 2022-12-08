import { useDispatch, useSelector } from "react-redux";
import { minusCount, plusCount } from "../redux/modules/counter";

const CountNumber = () => {
  const Num = useSelector((state) => state.counter.count);
  console.log(useSelector((state) => state));
  const dispatch = useDispatch();
  return (
    <div>
      <h1>숫자 올리기</h1>
      <span>{Num}</span>
      <button onClick={() => dispatch(plusCount(1))}>+</button>
      <button onClick={() => dispatch(minusCount(1))}>-</button>
    </div>
  );
};

export default CountNumber;
