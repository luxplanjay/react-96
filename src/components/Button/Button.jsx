import clsx from "clsx";
import css from "./Button.module.css";

export const Button = ({ variant, children }) => {
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
};
