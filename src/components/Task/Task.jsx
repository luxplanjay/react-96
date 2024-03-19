import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask, updateTask } from "../../redux/tasksOps";
import { useState } from "react";

const TaskEditor = ({ taskId, initialValue, onClose }) => {
  const [text, setText] = useState(initialValue);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTask({
        id: taskId,
        text,
      })
    )
      .unwrap()
      .then(() => onClose());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      {isEditing ? (
        <TaskEditor
          initialValue={task.text}
          taskId={task.id}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <p className={css.text} onClick={() => setIsEditing(true)}>
          {task.text}
        </p>
      )}

      <button className={css.btn} onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </button>
    </div>
  );
}
