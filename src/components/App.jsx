import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const HomePage = lazy(() => import("../pages/HomePage"));
const PaymentsPage = lazy(() => import("../pages/PaymentsPage"));
const PaymentDetailsPage = lazy(() => import("../pages/PaymentDetailsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ClientInfo = lazy(() => import("./ClientInfo"));
const PaymentReceipt = lazy(() => import("./PaymentReceipt"));

export default function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
            <Route path="client" element={<ClientInfo />} />
            <Route path="receipt" element={<PaymentReceipt />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
