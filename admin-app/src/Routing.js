import {Routes,Route} from 'react-router-dom'
import AddUser from './pages/AddUser'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Users from './pages/Users'

export default function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='users' element={<Users />}/>
        <Route path='add-user' element={<AddUser/>} />

    </Routes>
  )
}
