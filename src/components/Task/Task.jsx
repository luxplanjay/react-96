import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask } from "../../redux/tasksOps";

export default function Task({ task }) {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </button>
    </div>
  );
}
