import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MonkeyTreeLeaderboard from './pages/gamify'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<MonkeyTreeLeaderboard />} />    
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />  
          <Route path="/terms-of-use" element={<Terms />} />  
        </Routes>
      </Router>
    </>
  )
}

export default App
