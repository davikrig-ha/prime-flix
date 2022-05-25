import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./pages/error";
import Home from "./pages/home";
import Filme from "./pages/filme";

import Header from "./components/header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/filme/:id" element={<Filme />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;