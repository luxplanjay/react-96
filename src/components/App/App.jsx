import { PageTitle } from "../PageTitle/PageTitle";
import { PaymentList } from "../PaymentList/PaymentList";
import payments from "../../payments.json";

export const App = () => {
  return (
    <>
      <PageTitle>Payments</PageTitle>
      <PaymentList payments={payments} />
    </>
  );
};

{
  /* <Section text="Що це за очки досвіду та рівні?">
  <Points/>
</Section>

<Section text="Як отримати більше очків досвіду?">
  <Activities/>
</Section>

<Section text="Скільки балів за що нараховуємо?">
  <Grades/>
</Section>

const Section = ({ text, children }) => {
  return (
    <section>
      <b>{text}</b>
      {children}
    </section>
  );
}; */
}
