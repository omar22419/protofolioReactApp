
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Portfolio from './Pages/Portfolio/Portfolio';
import Layout from "./Components/Layout";

const router = createBrowserRouter([
  {
    path:'', element:<Layout/>, children:[
      {index:true, element:<Home />},
      {path: "about", element:<About />},
      {path: "contact", element:<Contact />},
      {path: "portfolio", element:<Portfolio />},
      {path:'*', element:<div className="bg-info vh-100 d-flex justify-content-center align-items-center"><h1>4   0   4</h1></div>},
    ]
  }]);

export default function App() {

  window.onscroll= function(){
    scrollFunction();
  };

  function scrollFunction(){
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
      document.getElementById("Navbar").style.height="90px";
    }
    else{
      document.getElementById("Navbar").style.height="120px";
    }
  }

  return (
    <>

    <RouterProvider router={router}/>
      {/* <Navbar />
      <Home />
      <About />
      <Contact />
      <Portfolio />
      <Footer /> */}
    </>
  )
}
