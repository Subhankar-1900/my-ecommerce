import react from 'react'
import Navbar from './component/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Product from "./component/Product"
import Cart from "./component/Cart"
import Login from "./component/Login"
import ErrorPage from "./component/ErrorPage"
import Footer from './component/Footer'
function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar></Navbar>
        <Routes>
             <Route path="/" element={<Home></Home>}></Route>
             <Route path="/About" element={<About></About>}></Route>
             <Route path="/Product"element={<Product></Product>}></Route>
             <Route path="/Cart" element={<Cart></Cart>}></Route>
             <Route path="/Login"element={<Login></Login>}></Route>
             <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
             
        </Routes>
        <Footer></Footer>
     </BrowserRouter>
      
    </>
  )
}

export default App
