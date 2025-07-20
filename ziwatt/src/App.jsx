import "./App.css";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Pages";
import ProductsDetails from "./Components/Pages/ProductsDetails";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product/:id" element={ProductsDetails} />

      </Routes>

   
    </>
  );
}

export default App;
