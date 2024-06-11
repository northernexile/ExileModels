
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import ModelBuildings from './pages/ModelBuildings';
import Throttle from './pages/Throttle';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import VerifyRegistration from './pages/VerifyRegistration';
import VerifyReminder from './pages/VerifyReminder';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/models' element={<ModelBuildings />} />
            <Route path='/throttle' element={<Throttle />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register/>} />
            <Route path='/password/rest' element={<ResetPassword/>} />
            <Route path='/email/verify' element={<VerifyRegistration/>} />
            <Route path='/reminder/verify' element={<VerifyReminder />} /> 
        </Routes>
    )
}