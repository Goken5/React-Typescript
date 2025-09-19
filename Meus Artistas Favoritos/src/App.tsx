import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import AboutMe from "./pages/AboutMe"
import TameImpala from "./pages/TameImpala"
import PinkFloyd from "./pages/PinkFloyd"

function App() {

  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/tameimpala" element={<TameImpala />} />
      <Route path="/pinkfloyd" element={<PinkFloyd />} />
    </Routes>
      
  )
}

export default App;