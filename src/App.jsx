// import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home/Home";
import Tweets from "./pages/Tweets/Tweets";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
}

export default App;
