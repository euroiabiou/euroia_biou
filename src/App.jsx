import { BrowserRouter } from 'react-router-dom';
import {  Hero, Navbar, } from './components'

const App = () =>  {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-champagne-100">
      
        <Navbar />
        <Hero />      
        <div className='relative z-0'>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App
