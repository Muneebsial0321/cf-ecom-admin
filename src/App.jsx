import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Products from "./Pages/Products/Product"
import Order from './Pages/Order/Order'
import OrderList from './Pages/Order/OrderList'

function App() {
  console.log("dot env is",import.meta.env.VITE_API_URL)
  return (
    <>
      <NavBar/>
      <Routes>
      <Route path="products" element={<Products />} />
      <Route path="order" element={<Order />} />
      <Route path="orderlist" element={<OrderList />} />
      </Routes>
    </>
  )
}

export default App
