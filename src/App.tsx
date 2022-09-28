import { useState } from "react";
import reactLogo from "./assets/react.svg";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <DefaultLayout>
        <div className="w-full h-full ml-64">
          <h1>Hello</h1>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default App;
