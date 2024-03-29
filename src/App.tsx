import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
