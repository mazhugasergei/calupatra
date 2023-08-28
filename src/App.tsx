// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
// components
import Header from "components/Header"
// pages
import Home from "pages/Home/Home"

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}