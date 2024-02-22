import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./UserForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short!")
    .max(20, "Too long!")
    .required("This is required you dummy!"),
  email: Yup.string()
    .email("Must be in email format")
    .required("This is required you dummy!"),
  role: Yup.string()
    .oneOf(["guest", "user", "admin"])
    .required("This is required you dummy!"),
});

export default function UserForm({ onDoStuffHehe }) {
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const roleFieldId = useId();

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        role: "user",
      }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        onDoStuffHehe(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={usernameFieldId}>Name:</label>
          <Field type="text" name="username" id={usernameFieldId} />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div>
          <label htmlFor={emailFieldId}>Email:</label>
          <Field type="email" name="email" id={emailFieldId} />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div>
          <label htmlFor={roleFieldId}>Role:</label>
          <Field as="select" name="role" id={roleFieldId}>
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Field>
          <ErrorMessage className={css.error} name="role" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
