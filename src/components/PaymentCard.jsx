import { Link, useLocation } from "react-router-dom";

export default function PaymentCard({ payment }) {
  const location = useLocation();

  return (
    <div>
      <p>Amount: {payment.amount}</p>
      <p>Owner: {payment.cardOwner}</p>
      <p>Description: {payment.description}</p>
      <Link to={`/payments/${payment.id}`} state={location}>
        Details
      </Link>
    </div>
  );
}
