import "./App.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Form</h1>
        <p className="app-subtitle">Developed with Formik and Yup</p>
      </header>
      <main className="app-main">
        <Formulario />
      </main>
    </div>
  );
}

export default App;
