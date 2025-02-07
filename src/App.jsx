import "./App.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Formulário React</h1>
        <p className="app-subtitle">Desenvolvido com Formik e Yup</p>
      </header>
      <main className="app-main">
        <Formulario />
      </main>
    </div>
  );
}

export default App;
