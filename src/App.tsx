import { Route, Routes } from "react-router-dom";
import Layout from "@/components/layouts/layout";
import Home from "@/components/pages/home/view/home";
import Contact from "@/components/pages/contact/view/contact";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />
      
      <Route path="/projects" element={
        <Layout>
          {/* <Projects /> */}
          haloo
        </Layout>
      } />
      
      <Route path="/contact" element={
        <Layout>
          <Contact />
        </Layout>
      } />
    </Routes>
  );
}

export default App;
