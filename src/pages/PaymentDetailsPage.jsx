import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getPaymentById } from "../payments-api";

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getPaymentById(paymentId);
        setPayment(data);
      } catch (error) {}
    }

    getData();
  }, [paymentId]);

  return (
    <div>
      <h1>PaymentDetailsPage: {paymentId}</h1>

      {payment && (
        <div>
          <p>Amount: {payment.amount}</p>
          <p>Number: {payment.cardNumber}</p>
          <p>Owner: {payment.cardOwner}</p>
          <p>Type: {payment.cardType}</p>
          <p>Descrioption: {payment.description}</p>
        </div>
      )}

      <ul>
        <li>
          <NavLink to="client">Client info</NavLink>
        </li>
        <li>
          <NavLink to="receipt">Receipt</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
