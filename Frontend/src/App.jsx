import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./Layout/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
       </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
