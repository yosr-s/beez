import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
    return (
        <>
           <div>
 <Header/>
  {/* page content*/}
  <Outlet></Outlet>
  {/*footer*/}
  {/* Footer */}
  <Footer/>
  {/* Footer */}
</div>
        
            
        </>
    )
}

export default Home
