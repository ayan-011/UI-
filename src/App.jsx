 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'

 
 
 const App = () => {
   return (
     <div className='bg-[#424242]'>
      
      <Routes> 
        <Route element={<Home/>} path='/'/>
        <Route element={<Home/>} path='/home'/> 
      </Routes>
     </div>
   )
 }
 
 export default App