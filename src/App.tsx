import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import Terms from './pages/legal/Terms'
import Audit from './pages/Audit'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />  
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />  
          <Route path="/terms-of-use" element={<Terms />} />  
          <Route path="/audit" element={<Audit />} />  
        </Routes>
      </Router>
    </>
  )
}

export default App
