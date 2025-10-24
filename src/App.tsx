import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'
import GoogleTagManager from './components/GoogleTagManager'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Showrooms from './pages/Showrooms'
import Blog from './pages/Blog'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <GoogleAnalytics />
        <GoogleTagManager />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/urunler" element={<Products />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/showroom" element={<Showrooms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
