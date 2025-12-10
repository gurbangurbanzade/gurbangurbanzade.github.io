"use client";
import React from 'react'
import BackBtn from '../../components/backBtn'
import Manager from '../../components/Manager';
import Login from '../../components/Login';
import { useState, useEffect } from 'react';

import './style.scss'
function Admin() {
    useEffect(() => {
        localStorage.getItem("loginId") && setisLogged(true)
    }, []);
    const [isLogged, setisLogged] = useState(false);

    return (
        <>
            <BackBtn />
            <div className="container">
                {
                    isLogged ? <Manager setisLogged={setisLogged} isLogged={isLogged} /> : <Login setisLogged={setisLogged} isLogged={isLogged} />
                }


                {/* <Link to={"manager"}>to manager</Link> */}
                {/* <Outlet /> */}
            </div>
        </>
    )
}

export default Admin