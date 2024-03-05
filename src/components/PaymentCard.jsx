import { Link } from "react-router-dom";

export default function PaymentCard({ payment }) {
  console.log(payment);
  return (
    <div>
      <p>Amount: {payment.amount}</p>
      <p>Description: {payment.description}</p>
      <Link to={`/payments/${payment.id}`}>Details</Link>
    </div>
  );
}
