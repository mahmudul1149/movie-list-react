import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Signin from "./pages/signin";
import Home from "./pages/todos";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        {" "}
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
          <Route path="/signin" element={<Signin />} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
