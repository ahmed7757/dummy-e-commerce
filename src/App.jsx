import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Product from "./pages/product";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
