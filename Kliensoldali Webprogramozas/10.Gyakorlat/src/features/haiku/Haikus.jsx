import { useSelector, useDispatch } from "react-redux";
import { remove, select, selectHaikus } from "./haikuSlice";

export function HaikuList() {
  const haikus = useSelector(selectHaikus);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Haiku list</h2>
      {haikus.map((haiku, i) => (
        <div key={i}>
          <pre onClick={() => dispatch(select(i))}>{haiku}</pre>
          <button onClick={() => dispatch(remove(i))}>Remove</button>
        </div>
      ))}
    </div>
  );
};
