// import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeLanding from "./components/HomeLanding";
import Home1 from "./components/Home";
import Login from "./components/Login";
//import Signup from "./components/Signup";
import PhoneSign from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
// import Slider from "./components/inc/Slider";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import Aboutus from "./components/pages/About";
import Product from "./components/pages/Product";
import Contact from "./components/pages/Contact";
import LoanEligibilityCalculator from "./components/pages/calculator";
// import LoanCal from "./components/pages/LoanCal";
// import Homeloan from "./components/pages/Homeloan"


import Homeloan from "./components/pages/Homeloan";
import CalculatorPage from "./components/pages/CalculatorPage";
function App() {
  return (
    < >
   
        <Navbar/>
        
          {<UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<HomeLanding/>} />
              <Route path="/home" element={<HomeLanding/>} />
              <Route path="/about" element={<Aboutus />} />
              <Route path="/product" element={<Product />} />
              <Route path="/contact" element ={<Contact/>}/>
              <Route path="/calculator" element={<LoanEligibilityCalculator />} />
              <Route path="/calculatorpage" element={<CalculatorPage />} />

              {/* <Route path="/loancal" element={<LoanCal />} /> */}
              <Route path="/homeloan" element={<Homeloan/>}/>
              <Route
                path="/homebackend"
                element={
                  <ProtectedRoute>
                    <Home1 />
                  </ProtectedRoute>
                }
              />
              <Route path="/Login" element={<Login />} />
              
              <Route path="/phonesignup" element={<PhoneSign/>} />
            </Routes>
          </UserAuthContextProvider> }
          
        <Footer/>
    
    </>
  );
}

export default App;
