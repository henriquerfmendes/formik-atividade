import * as yup from "yup";
const passwordSchema = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor, entre com um e-mail válido")
    .required("Obrigatório"),
  age: yup.number().positive('Idade deve ser um valor maior que zero').integer('Idade deve ser um valor inteiro').required("Obrigatório"),
  password: yup
    .string()
    .min(6, 'A senha deve possuir ao menos 6 caracteres')
    .matches(passwordSchema, {
      message:
        "Por favor, crie uma senha forte: mínimo de 6 caracteres, sendo 1 número, 1 letra maiúscula e 1 letra minúscula",
    })
    .required("Obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem coincidir")
    .required("Obrigatório"),
});
