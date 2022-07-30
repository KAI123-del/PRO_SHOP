import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {

  return (
    <Router>
      <div style={{backgroundColor:" #333",height:"100%"}}>
      <Header />
      <Routes>
        <Route path={"/"} element={<Products />} />
        <Route path={"products"} element={<ProductDetails />} />
        <Route path={"cart"} element={<Cart/>}/>
      </Routes>

      </div>
    </Router>
  );
}

export default App;
