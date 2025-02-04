import * as yup from "yup";
const passwordSchema = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{8,}$/;

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor, entre com um e-mail válido")
    .required("Obrigatório"),
  age: yup
    .number()
    .typeError("Idade deve ser um número")
    .positive('Idade deve ser um valor maior que zero')
    .integer('Idade deve ser um valor inteiro')
    .min(18, 'Você deve ter pelo menos 18 anos')
    .max(120, 'Idade inválida')
    .required("Idade é obrigatória"),
  password: yup
    .string()
    .min(8, 'A senha deve possuir ao menos 8 caracteres')
    .matches(passwordSchema, {
      message:
      "A senha deve conter pelo menos: 8 caracteres, 1 número, 1 letra maiúscula, 1 letra minúscula e 1 caractere especial",
    })
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem coincidir")
    .required("Confirmação de senha é obrigatória"),
});
