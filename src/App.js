import "./App.css";
import Home from "./page/home";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./page/header";
import Footer from "./page/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" element={<Home />} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
