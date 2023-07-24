import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Layout from "./companents/layout/index ";
import Single from "./pages/single";
import Navbar from "./companents/navbar";
import Home from "./pages/home";
import Sajda from "./pages/sajda";
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="menyu">
        <Navbar/>
        <Layout>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/single/:number/" element={ <Single/>} /> 
            <Route path="/sajda" element={ <Sajda/>} />
            <Route path="*" element={<h1>404 Not Found</h1>}/>
          </Routes>
        </Layout>
      </div>
    </div>
  );
};

export default App;
