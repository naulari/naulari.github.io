import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster"

function App() {

  return (
    <>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App