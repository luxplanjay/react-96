import { Suspense, useEffect, useRef, useState } from "react";
import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import { getPaymentById } from "../payments-api";

// /payments?owner=john > Link > state > location (/payments?owner=john)
// /payments/1 > location.state (/payments?owner=john)
// /payments/1 > Link > /payments/1/client
// /payments/1/client > location.state (null)

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/payments");

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
      <Link to={backLinkRef.current}>Go back</Link>

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

      <Suspense fallback={<div>LOADING SUB COMPONENT...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
