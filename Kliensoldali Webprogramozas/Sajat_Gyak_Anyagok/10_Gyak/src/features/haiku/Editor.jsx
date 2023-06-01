import { useDispatch, useSelector } from "react-redux";
import styles from "./Editor.module.css";
import { add, save, selectEditedText, selectHaikus } from "./haikuSlice";

export function Editor() {
  const haikus = useSelector(selectHaikus);
  const dispatch = useDispatch();
  const {text, isHaiku, vowelsPerRow} = selectEditedText();
  return (
    <div>
      <textarea
        rows="4"
        cols="40"
        className={isHaiku ? styles.good : styles.wrong}
        value={text}
      ></textarea>
      <p>Vowels per row: {vowelsPerRow[0]},{vowelsPerRow[1]},{vowelsPerRow[2]}</p>
      <button onClick={() => dispatch(add(i))}>Add</button>
      <button onClick={() => dispatch(save(i))}>Save</button>
    </div>
  );
};
