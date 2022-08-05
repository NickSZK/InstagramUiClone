import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Direct from '../pages/Direct/Direct'
import Login from '../pages/Login/Login'
import Error from '../pages/Error/Error'
import Register from '../pages/Register/Register'

export default function RoutesApp() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Register />} />
            <Route path='/home' element={ <Home /> }/>
            <Route path='/direct' element={ <Direct /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='*' element={ <Error /> } />
         </Routes>
      </BrowserRouter>
   )
}