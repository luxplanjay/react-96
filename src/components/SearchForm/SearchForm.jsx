import { Field, Form, Formik } from "formik";

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form>
        <Field name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
