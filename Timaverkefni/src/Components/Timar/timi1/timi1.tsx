import { useState } from "react";
import { Input } from "../../Input/Input";
import "./timi1.css";

export default function Timi1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="timi1">
      <h2>Tími 1 + 2</h2>
      <p>My name: {name}</p>

      <Input value={name} onChange={(e) => setName(e.target.value)} />

      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
    </section>
  );
}
