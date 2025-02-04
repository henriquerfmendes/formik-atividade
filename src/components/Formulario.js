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
              label="E-mail"
              placeholder="Entre com o e-mail"
            />
            <InputField
              id="age"
              type="age"
              label="Idade"
              placeholder="Entre com a idade"
            />
            <InputField
              id="password"
              type="password"
              label="Senha"
              placeholder="Entre com a senha"
            />
            <InputField
              id="confirmPassword"
              type="password"
              label="Confirme a senha"
              placeholder="Confirme a senha"
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
                {formikProps.isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {valoresInformados && (
        <div className="submitted-data">
          <h4>Dados Enviados:</h4>
          <ul>
            {Object.entries(valoresInformados).map(([key, value]) => {
              const labels = {
                email: "E-mail",
                age: "Idade",
                password: "Senha",
                confirmPassword: "Confirmação de senha",
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
