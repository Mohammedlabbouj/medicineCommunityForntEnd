import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import CodeVerification from './pages/CodeVerification'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/createAcount' element = {<SignUp />} />
        <Route path='/codeVerification' element = {<CodeVerification />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
