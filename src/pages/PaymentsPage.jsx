import { useEffect, useMemo, useState } from "react";
import PaymentList from "../components/PaymentList";
import { getPayments } from "../payments-api";
import { useSearchParams } from "react-router-dom";
import OwnerFilter from "../components/OwnerFilter";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [params] = useSearchParams();
  const ownerFilter = params.get("owner") ?? "";

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

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) =>
      payment.cardOwner.toLowerCase().includes(ownerFilter.toLowerCase())
    );
  }, [ownerFilter, payments]);

  return (
    <div>
      <h1>Payments</h1>
      <OwnerFilter />
      {isLoading && <b>Loading payments...</b>}
      {error && <b>HTTP error!</b>}
      <PaymentList payments={filteredPayments} />
    </div>
  );
}
