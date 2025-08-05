import React,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.js';
import {login,logout} from './store/authSlice.js';
import {Header,Footer, Spinner} from './components'
import './App.css'
import { Outlet } from 'react-router-dom';

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
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>  

    
 );
else return (
        <div className='bg-gray-500 flex flex-col items-center justify-center min-h-screen w-full'>
          <Spinner/>
            <div className="text-white text-2xl mt-2 text-center">
                Loading...
            </div>
        </div>
);
}

export default App
