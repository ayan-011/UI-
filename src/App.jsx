 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Docs from './pages/Docs'

 
 
 const App = () => {
   return (
     <div  data-scroll-container className='bg-[#424242]'>
      
      <Routes> 
        <Route element={<Home/>} path='/'/>
        <Route element={<Home/>} path='/home'/> 
        <Route element={<Docs/>} path='/docs'/> 
      </Routes>
     </div>
   )
 }
 
 export default App