import "./App.css";
import { Form } from "./Components/Form";
import { ShopCard } from "./Components/Shopcard/ShopCard";
import Timi1 from "./Components/Timar/timi1/timi1";
import { Timaverkefni3 } from "./Components/Timaverkefni/Timaverkefni3";

function App() {
  return (
    <>
      <Timi1 />

      {/* Card */}
      <ShopCard />

      <Form />

      <h2>Tímaverkefni - Tími 3</h2>
      <Timaverkefni3 />
    </>
  );
}

export default App;
