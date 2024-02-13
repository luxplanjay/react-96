import clsx from "clsx";
import css from "./Button.module.css";

export default function Button({ variant, children }) {
  return (
    <button
      className={clsx(
        css.btn,
        variant === "primary" ? css.primary : css.secondary
      )}
    >
      {children}
    </button>
  );
}
