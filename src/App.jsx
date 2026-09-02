import { useEffect } from 'react'
import Home from './Components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  )
}

export default App