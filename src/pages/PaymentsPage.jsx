import { useEffect, useState } from "react";
import PaymentList from "../components/PaymentList";
import { getPayments } from "../payments-api";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getPayments();
        setPayments(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Payments</h1>
      {isLoading && <b>Loading payments...</b>}
      {error && <b>HTTP error!</b>}
      <PaymentList payments={payments} />
    </div>
  );
}
