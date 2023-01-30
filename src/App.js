import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Services from "./pages/services/Services";
import SelectDate from "./pages/date/SelectDate";
import SelectTime from "./pages/selectTime/SelectTime"

function App() {
  let { id } = useParams()
  console.log(id)
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product/services" element={<Services />} />
          <Route path="/product/services/selectdate" element={<SelectDate />} />
          <Route path="/product/selecttime" element={<SelectTime />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
