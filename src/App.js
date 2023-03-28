import React, { Suspense, useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getProducts } from './features/products/productSlice';
import { useDispatch } from 'react-redux';
import ScrollToTop from "./components/ScrollToTop"
import LoadingSpinner from "./components/LoadingSpinner"
import Product from "./pages/Product";
const Home = React.lazy(()=>import("./pages/Home"))
const ProductPage = React.lazy(()=>import("./pages/ProductPage"))

function App() {
  const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(getProducts())
  },[])

  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Suspense fallback={<LoadingSpinner />}><Home /></Suspense>} />
      <Route path="products" element={<Product />} />
      <Route path="products/:id" element={<Suspense fallback={<LoadingSpinner />}><ProductPage /></Suspense>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
