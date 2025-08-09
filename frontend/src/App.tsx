import { helloWorld } from "@tuanhuynh734623/helloworld";
import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    helloWorld();

    const connectAPI = async () => {
      const result = await fetch(`${process.env.REACT_APP_API_URL}/WeatherForecast`);
      const data = await result.json();
      console.log("Data from API: ", data);
    };
    connectAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
