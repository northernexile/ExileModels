
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
import { ProtectedRoute } from './components/ProtectedRoute';
import Admin from './pages/admin/Admin';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Logout from './pages/Logout';
import AdminUsers from './pages/admin/AdminUsers';
import AdminRoles from './pages/admin/AdminRoles';
import AdminScales from './pages/admin/AdminScales';
import AdminModels from './pages/admin/AdminModels';
import AdminBlog from './pages/admin/AdminBlog';
import AdminOrders from './pages/admin/AdminOrders';
import AdminContact from './pages/admin/AdminContact';

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
            <Route path='/password/reset' element={<ResetPassword/>} />
            <Route path='/email/verify' element={<VerifyRegistration/>} />
            <Route path='/reminder/verify' element={<VerifyReminder />} /> 
            <Route element={<ProtectedRoute />}>
                <Route path='/account' element={<Account />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/admin/users' element={<AdminUsers />} />
                <Route path='/admin/roles' element={<AdminRoles />} />
                <Route path='/admin/scales' element={<AdminScales />} />
                <Route path='/admin/models' element={<AdminModels />} />
                <Route path='/admin/blog' element={<AdminBlog />} />
                <Route path='/admin/orders' element={<AdminOrders />} />
                <Route path='/admin/contact' element={<AdminContact />} />
                <Route path='/logout' element={<Logout />} />
            </Route>
        </Routes>
    )
}