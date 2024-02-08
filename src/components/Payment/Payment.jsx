import clsx from "clsx";
import { FaBeer } from "react-icons/fa";
import css from "./Payment.module.css";

export const Payment = ({
  data: { amount, description, cardType, cardNumber, cardOwner, date, isPaid },
}) => {
  const containerClass = clsx(
    css.container,
    isPaid ? css.isPaid : css.isPending
  );

  return (
    <div className={containerClass}>
      <div>
        <FaBeer size="40" className={css.icon} />
      </div>
      <p>
        Status: {isPaid ? "Paid" : "Pending"} {amount}$
      </p>
      <p>Description: {description}</p>
      <p>Card Number: {cardNumber}</p>
      <p>Card Type: {cardType}</p>
      <p>Card Holder Name: {cardOwner}</p>
      <p>Payment Date: {date}</p>
    </div>
  );
};
