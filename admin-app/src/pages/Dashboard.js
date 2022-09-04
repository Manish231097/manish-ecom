import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const navigate = useNavigate();
   useEffect(()=>{
    let isUser=localStorage.getItem('email')

    if(!isUser){
      navigate('/')
    }
   })

  return (
    <>
        <Navbar/>

        <div className="container">
            <h1>dashboard</h1>
        </div>
    </>

  )
}
