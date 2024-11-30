import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Experience from './pages/Experience';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className='containerNav'>
        <Navbar/>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/Experience" element={<Experience/>}/>
      </Routes>
    </Router>
  )
}

export default App