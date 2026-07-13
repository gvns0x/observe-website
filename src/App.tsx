import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Temporary from './pages/Temporary'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Temporary />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App