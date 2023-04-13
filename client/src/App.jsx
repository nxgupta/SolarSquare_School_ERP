import './App.css'
import Register from './pages/register'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import AddStudent from './pages/admin/addStudent'
import ViewStudents from './pages/admin/ViewStudents'
import EditStudent from './pages/admin/editStudent'
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/addStudent' element={<AddStudent />} />
          <Route path='/viewStudents' element={<ViewStudents />} />
          <Route path='/editStudent/:id' element={<EditStudent />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </div>
  )
}


export default App
