import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import AboutMe from "./pages/AboutMe"

function App() {

  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
      
  )
}

export default App;