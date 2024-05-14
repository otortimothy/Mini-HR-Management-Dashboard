import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import Message from "./Components/Message"
import Calender from "./Components/Calender"




export default function App() {


  return (
    <div className="w-full flex h-screen bg-gray-100">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="Message" element={<Message/>}/>
        <Route path="Calender" element={<Calender/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

