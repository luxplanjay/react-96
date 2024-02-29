import { Field, Form, Formik } from "formik";
// import { createContext, useContext } from "react";

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

// const formCtx = createContext();

// const MyFormik = ({ initialValues, onSubmit, children }) => {
//   const [state, setstate] = useState(initialValues);

//   return (
//     <formCtx.Provider value={{ state, onSubmit }}>{children}</formCtx.Provider>
//   );
// };

// const Form = ({ children }) => {
//   const ctx = useContext(formCtx);

//   const handleSubmit = (e) => {
//     e.preventDefaul();
//     ctx.onSubmit(ctx.state);
//   };

//   return <form onSubmit={handleSubmit}>{children}</form>;
// };

// const Field = ({ name }) => {
//   const ctx = useContext(formCtx);
//   return <input type="text" name={name} value={ctx.state[name]} />;
// };
