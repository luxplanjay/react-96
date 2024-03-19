import { useDispatch } from "react-redux";
import css from "./TaskForm.module.css";
import { addTask } from "../../redux/tasksOps";

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    dispatch(
      addTask({
        text: form.elements.text.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log("addTask fulfilled");
      })
      .catch();

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button type="submit">Add task</button>
    </form>
  );
}
