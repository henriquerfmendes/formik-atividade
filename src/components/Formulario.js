import { useState } from "react";
import { useFormik } from "formik";
import { schema } from "../schema";
import InputField from "./InputField";

const Formulario = () => {
  const [valoresInformados, setValoresInformados] = useState("");

  const onSubmit = (values, actions) => {
    setValoresInformados(values);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  const { handleSubmit, errors, isSubmitting, dirty } = formik;

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <InputField
          id="email"
          type="email"
          label="E-mail"
          placeholder="Entre com o e-mail"
          formik={formik}
        />
        <InputField
          id="age"
          type="age"
          label="Idade"
          placeholder="Entre com a idade"
          formik={formik}
        />
        <InputField
          id="password"
          type="password"
          label="Senha"
          placeholder="Entre com a senha"
          formik={formik}
        />
        <InputField
          id="confirmPassword"
          type="password"
          label="Confirme a senha"
          placeholder="Confirme a senha"
          formik={formik}
        />
        <div>
          <button
            type="submit"
            onClick={onsubmit}
            disabled={isSubmitting || !!Object.keys(errors).length || !dirty}
          >
            Submit
          </button>
        </div>
      </form>
      {valoresInformados && (
        <ul>
          <li>
            <strong>E-mail:</strong> {valoresInformados.email}
          </li>
          <li>
            <strong>Idade:</strong> {valoresInformados.age}
          </li>
          <li>
            <strong>Senha:</strong> {valoresInformados.password}
          </li>
          <li>
            <strong>Confirmação de Senha:</strong>
            {valoresInformados.confirmPassword}
          </li>
        </ul>
      )}
    </>
  );
};

export default Formulario;
