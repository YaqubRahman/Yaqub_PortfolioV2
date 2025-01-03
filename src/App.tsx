import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Experience from './pages/Experience';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Projects from './pages/Projects';

export default function App() {
  return (
    <Router>
      <div className='containerNav'>
        <Navbar/>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}