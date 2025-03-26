import "./App.scss";
import Form from "./components/form";

function App() {
  return (
    <>
      <h1>Springload Te Pipītanga</h1>
      <div className="instructions">
        <p>To create an account please fill out this form.</p>
        <p>Once submitted you will receive an email with the next steps.</p>
      </div>
      <Form />
    </>
  );
}

export default App;
