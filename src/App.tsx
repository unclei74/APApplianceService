import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Seo } from "./components/Seo";
import Home from "./pages/Home";
import Repairs from "./pages/Repairs";
import Services from "./pages/Services";
import Brands from "./pages/Brands";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";

export default function App() {
  return (
    <>
      <Seo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repairs" element={<Repairs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/about" element={<About />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
