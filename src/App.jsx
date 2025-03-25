import { useState } from "react";
import "./App.scss";
import Form from "./components/form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Springload Te Pipītanga</h1>
      <p>To create an account please fill out this form.</p>
      <p>Once submitted you will receive an email with the next steps.</p>
      <div>
        <Form />
      </div>
    </>
  );
}

export default App;
