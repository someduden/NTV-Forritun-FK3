import { useState, type ChangeEvent } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <>
      <div>
        <p>My name: {name}</p>

        <input
          type="text"
          value={name}
          placeholder="Enter your name..."
          onChange={(e) => handleChange(e)}
        />

        <input
          type="email"
          value={email}
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={() => alert("submitted" + " " + email)}>Submit</button>
      </div>
    </>
  );
}

export default App;
