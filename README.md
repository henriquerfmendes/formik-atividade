# Formulário React com Formik e Yup

Este projeto é um formulário simples desenvolvido com React, utilizando as bibliotecas Formik e Yup para gerenciamento de formulários e validação de dados. O objetivo principal é demonstrar a implementação de formulários controlados, validação de inputs e exibição dos dados submetidos.

## Funcionalidades:

* Formulário com campos de e-mail, idade, senha e confirmação de senha.
* Validação de campos utilizando Yup, incluindo verificação de formato de e-mail, idade numérica e correspondência de senhas.
* Exibição de mensagens de erro para campos inválidos.
* Exibição dos dados enviados após a submissão do formulário.
* Feedback visual de "Enviando..." durante o processo de submissão.


## Tecnologias Utilizadas:

* React
* Formik
* Yup
* JavaScript


## Detalhes da Implementação:

* **Formik:** Utilizado para gerenciar o estado do formulário, lidar com mudanças nos inputs e facilitar a submissão do formulário.
* **Yup:** Utilizado para definir o esquema de validação do formulário, garantindo que os dados inseridos pelos usuários estejam corretos.
* **InputField Component:** Componente reutilizável para os campos de input, que utiliza `useField` do Formik para integração com o estado do formulário e exibição de erros.
* **Validação de Inputs:** O esquema de validação (`schema`) define regras para cada campo, como formato de e-mail, tipo de dado (numérico para idade) e correspondência de senhas.
* **Exibição de Dados Submetidos:** Após a submissão bem-sucedida, os dados do formulário são exibidos na interface, facilitando a visualização e verificação dos dados inseridos.


---

# React Form with Formik and Yup

This project is a simple form developed with React, using the Formik and Yup libraries for form management and data validation. The main objective is to demonstrate the implementation of controlled forms, input validation, and display of submitted data.


## Features:

* Form with email, age, password, and confirm password fields.
* Field validation using Yup, including email format verification, numeric age, and password matching.
* Display of error messages for invalid fields.
* Display of submitted data after form submission.
* Visual feedback of "Sending..." during the submission process.


## Technologies Used:

* React
* Formik
* Yup
* JavaScript


## Implementation Details:

* **Formik:** Used to manage the form state, handle input changes, and facilitate form submission.
* **Yup:** Used to define the form validation schema, ensuring that user-entered data is correct.
* **InputField Component:** Reusable input field component that uses Formik's `useField` for integration with the form state and error display.
* **Input Validation:** The validation schema (`schema`) defines rules for each field, such as email format, data type (numeric for age), and password matching.
* **Display of Submitted Data:** After successful submission, the form data is displayed on the interface, facilitating the visualization and verification of the entered data.


## Imagens do projeto / Some images of the project

<div style="display: flex; justify-content: center">
  <img src="/src/assets/form-dataSent.png" alt="data sent" width="600px">
</div>

<br/> 

<div style="display: flex; justify-content: center">
  <img src="/src/assets/form-validation.png" alt="validations" width="600px">
</div>


-------------------------------------------------------------------------------------------------------------------------------------------------------
In the project directory, you can run: npm start
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
