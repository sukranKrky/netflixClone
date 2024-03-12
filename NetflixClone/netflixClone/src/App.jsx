
import './App.css'
import HomePage from './Component/HomePage'
import Users from './Component/Users'
import Login from "./Component/Login/Login"
import { Routes, Route,  } from 'react-router-dom';


function App() {
 
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Login/>}/>
        <Route path="/users" element={<Users />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="*" element="" />
      </Routes >
       
    </>
  )
}

export default App
