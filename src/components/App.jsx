import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage";
import PaymentsPage from "../pages/PaymentsPage";
import PaymentDetailsPage from "../pages/PaymentDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import ClientInfo from "./ClientInfo";
import PaymentReceipt from "./PaymentReceipt";

export default function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
          <Route path="client" element={<ClientInfo />} />
          <Route path="receipt" element={<PaymentReceipt />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
