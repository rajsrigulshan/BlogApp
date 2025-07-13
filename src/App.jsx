import React,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.js';
import {login,logout} from './store/authSlice.js';
import {Header,Footer} from './components'
import './App.css'

function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();
  

  useEffect(()=>{
    authService.getCurrentUser()
                .then((userData)=>{
                    if(userData){
                      dispatch(login({userData}));
                    }
                    else{
                      dispatch(logout());
                    }
                })
                .finally(()=>setLoading(false));
  },[]);
 if(!loading) return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
         TODO: {/* <Outlet/> to be done  */}
        </main>
        <Footer/>

      </div>
    </div>  

    
 );
 else return ( <h1 className='mt-100  text-center text-3xl text-red-500'>Loading...</h1> );
}

export default App
