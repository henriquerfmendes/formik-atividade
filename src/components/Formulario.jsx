import { useState } from "react";
import { Formik, Form } from "formik";
import { schema } from "../schema";
import InputField from "./InputField";

const Formulario = () => {
  const [valoresInformados, setValoresInformados] = useState(null);

  const initialValues = {
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          setValoresInformados(values);
          actions.resetForm();
        }}
      >
        {(formikProps) => (
          <Form autoComplete="off">
            <InputField
              id="email"
              type="email"
              label="Email"
              placeholder="Email"
            />
            <InputField id="age" type="age" label="Age" placeholder="Age" />
            <InputField
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
            />
            <InputField
              id="confirmPassword"
              type="password"
              label="Confirm password"
              placeholder="Confirm password"
            />
            <div>
              <button
                type="submit"
                disabled={
                  !formikProps.isValid ||
                  !formikProps.dirty ||
                  formikProps.isSubmitting
                }
              >
                {formikProps.isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {valoresInformados && (
        <div className="submitted-data">
          <h4>Data Sent:</h4>
          <ul>
            {Object.entries(valoresInformados).map(([key, value]) => {
              const labels = {
                email: "Email",
                age: "Age",
                password: "Password",
                confirmPassword: "Password confirmation",
              };
              return (
                <li key={key}>
                  <strong>{labels[key]}:</strong> {value}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Formulario;
