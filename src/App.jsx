import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Products from "./Pages/Products/Product"

function App() {
  console.log("dot env is",import.meta.env.VITE_API_URL)
  return (
    <>
      <NavBar/>
      <Routes>
      <Route path="products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App
