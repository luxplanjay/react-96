import { useId } from "react";
import css from "./TextFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTextFilter, selectTextFilter } from "../../redux/filtersSlice";

export default function TextFilter() {
  const id = useId();
  const value = useSelector(selectTextFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>Filter by text</label>
      <input
        className={css.field}
        type="text"
        id={id}
        value={value}
        onChange={(e) => dispatch(changeTextFilter(e.target.value))}
      />
    </div>
  );
}
