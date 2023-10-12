import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter from react-router-dom

import Home from "../src/pages/todos";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        {/* Wrap your Routes with BrowserRouter */}
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
          {/* Use "element" prop for the component */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
