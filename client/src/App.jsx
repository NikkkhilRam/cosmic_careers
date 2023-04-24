import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RergisterPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" index element={<LoginPage />} />
        <Route path="/register" index element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
