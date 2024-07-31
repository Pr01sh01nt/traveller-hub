import React, { useEffect,  useContext } from 'react'
import { Outlet,  useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';
import { MyContext } from './context/MyContext';
import Home from './pages/Home';
import Loading from './components/Loading';

export const UserPermission = ({pathValue}) => {
    // const [hasLogin, setHasLogin] = useState(0);
  
    const location = useLocation(); 
    const {hasLogin, setHasLogin} = useContext(MyContext);
    // console.log(location.pathname);

    console.log(hasLogin, "hasLogin rendered from userPermission", pathValue);
    useEffect(() => {
            console.log("userpermissoin");
        const check = async () => {
            try {
                const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/${pathValue}`, { withCredentials: true })
                    .then((res) => {
                        console.log(res.status);
                        return res.data;
                    });
                console.log(result, "RES");
                    
               
                setHasLogin(1);



            } catch (e) {
           
                setHasLogin(2);
                console.log('hi');
                console.log(e);
                // alert(e)
              
            }
        }

        check();
        
    }, [])
   
    return (
        <>

            {/* {hasLogin!==0 ? (hasLogin === 1 ? <>{console.log("child rendered")}<Outlet/></> : (<>{navigate("/", {replace : true})}<Home /></>)) : <h1>Loading.......</h1>} */}
            {hasLogin!==0 ? (hasLogin === 1 ? <><Outlet/></> : <NotLogin/> ) : <><Loading/></>}
        </>


    );





}


export const NotLogin = ()=>{
    const navigate = useNavigate();

    useEffect(()=>{
        navigate("/", {replace : true});
    },[]);

    return <Home/>
}