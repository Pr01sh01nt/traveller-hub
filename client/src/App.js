import './App.module.css';
import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar'
import { Register } from './pages/auth/Register';
import { Login } from './pages/auth/Login';
import About from './pages/About'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Footer from './components/Footer';
import UserHome from './pages/user/UserHome';
import MyJourney from './pages/user/MyJourney';
import Experiances from './pages/people/Experiance'
import { UserPermission } from './UserPermission';
import Post from './pages/people/Post'

function App() {
      const [test , setTest] = useState(0);
   
  

  console.log("render");
  return (



    <>
        
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/auth">
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />  

          
          <Route path="/user" element={<UserPermission pathValue={"user"}/>}>
       
            <Route  path="home" element={<UserHome />} />
            <Route exact  path="myjourney" element={<MyJourney />} />
         
          </Route>

          <Route path="/people" element={<UserPermission pathValue={"people"}/>}>
            <Route  exact path="experiances" element={<Experiances />} />
                    <Route  path =   "experiance" >
                    <Route  path =   ":handle" element = {<Post/>}/>
                            
                      </Route>
              
          </Route>
        


        </Routes>
        <Footer />
      </Router>
    
    </>
  );
}

export default App;
