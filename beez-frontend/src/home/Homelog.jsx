import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Headerlog from '../components/Headerlog'

const Homelog = () => {
    return (
        <>
        <Headerlog/>

        <Outlet></Outlet>
        <Footer/>

            
        </>
    )
}

export default Homelog
