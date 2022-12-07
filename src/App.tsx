import { Client, Account, ID } from "appwrite";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const client = new Client()
    .setEndpoint("https://localhost/v1") // Your API Endpoint
    .setProject("638f93e74661b91bcb02"); // Your project ID

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
