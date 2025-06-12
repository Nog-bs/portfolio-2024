import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { Home, About, Contact, Navbar, Footer, Projects } from './components'

function App() {
  const location = useLocation()

  return (
    <div className='flex flex-col min-h-screen items-center dark:bg-dark-mode text-slate-50 font-inter'>
      <Navbar />
      <div className='flex-grow pt-[30vh] md:pt-[20vh] px-3.5'>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}

export default App
