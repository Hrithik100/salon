import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Product from "./pages/product/Product";
import Services from "./pages/services/Services";
import SelectDate from "./pages/date/SelectDate";

function App() {
  let { id } = useParams()
  console.log(id)
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product/services" element={<Services />} />
          <Route path="/product/services/selectdate" element={<SelectDate />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
