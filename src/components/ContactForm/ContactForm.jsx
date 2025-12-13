import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";
import { useId } from "react";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must match 555-55-55 format")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm({ onAddContact }) {
  const nameId = useId();
  const numberId = useId();

  function handleSubmit(values, actions) {
    onAddContact({ ...values, id: nanoid() });
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <div className={css["form-item"]}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage
            name="name"
            component="span"
            className={css["form-error"]}
          />
        </div>
        <div className={css["form-item"]}>
          <label htmlFor={numberId}>Number</label>
          <Field type="tel" name="number" id={numberId} />
          <ErrorMessage
            name="number"
            component="span"
            className={css["form-error"]}
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
