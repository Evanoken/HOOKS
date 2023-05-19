import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <><div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="Pages/About" element={<About />} />
          <Route path="Pages/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
