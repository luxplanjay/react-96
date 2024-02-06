import { PaymentList } from "./PaymentList";
import payments1 from "../payments_1.json";
import payments2 from "../payments_2.json";
import payments from "../payments.json";

export const App = () => {
  return (
    <>
      <h2>Payments 1</h2>
      <PaymentList payments={payments1} />

      <h2>Payments 2</h2>
      <PaymentList payments={payments2} />

      <h2>All payments</h2>
      <PaymentList payments={payments} />
    </>
  );
};
