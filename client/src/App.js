import './App.module.css';
import { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route,  Navigate } from 'react-router-dom';
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
import EditPost from './pages/user/EditPost';
import { MyContext } from './context/MyContext';
import Profile from './pages/user/Profile';
import TermsAndConditions from './pages/TermsAndConditions';

import toast, { Toaster } from 'react-hot-toast';
import PeopleProfile from './pages/people/Profile';


function App() {
  const [test, setTest] = useState(0);
  const { hasLogin } = useContext(MyContext);
  // console.log(hasLogin, "hasLogin from app.js");


  console.log("render");
  return (



    <>

      <Toaster/>
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="" element={<UserPermission pathValue={""}/> }> 
                <Route path="" element =  {hasLogin === 1 ? <Navigate to = "/user/home"/> : <Home />}/>
          </Route>
          <Route path="/sitehome" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/auth">
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />


          <Route path="/user" element={<UserPermission pathValue={"user"} />}>

            <Route path="home" element={<UserHome />} />
            <Route exact path="myjourney" element={<MyJourney />} />
            <Route path="editpost" element={<EditPost />} />

          </Route>

          <Route path="/people" element={<UserPermission pathValue={"people"} />}>
            <Route exact path="experiances" element={<Experiances />} />
            <Route path="experiance" >
              <Route path=":handle" element={<Post />} />
            </Route>
            <Route path="profile" element={<PeopleProfile/>}/>

          </Route>

          <Route
              path="/termsandconditions"
              element={<TermsAndConditions />}
          />
            
        </Routes>
        <Footer />
      </Router>


    </>
  );
}

export default App;
