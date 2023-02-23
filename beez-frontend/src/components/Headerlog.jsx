import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import UserService from '../service/UserService';

const Headerlog = () => {

    const navigate = useNavigate();
    const onSubmitHandler = () => {
        Swal.fire({
          title: 'Are you sure to logout?',
          showDenyButton: true,
          showCancelButton: true,
          confirmedText: 'Yes',
          denyButtonText: `No`,
        }).then((result)=>{
          if (result.isConfirmed){
            UserService.logout()
            .then((res)=>{
              console.log(res)
            });
            localStorage.clear("user");
            localStorage.clear("token");
            localStorage.clear("refreshToken");
            navigate("/");
            
          }else if(result.isDenied){
            Swal.fire('not')
          }
        });
      };

    return (
        <>
      <header>
 
  <nav className="navbar navbar-expand-lg  bg-warning " data-bs-theme="dark">
    <div className="container-fluid">
      <a id="logo" className="navbar-brand" href="#" style={{color: 'black', fontWeight: 'bold'}}>
        <img src="images/logo.png" className="d-block w-100 " alt="..." style={{height: 60}} />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <center>
        <div className="collapse navbar-collapse" id="navbarNav" style={{marginRight: 200}}>
          <ul className="navbar-nav">
            <li className="nav-item" >
              <Link className="nav-link active" aria-current="page" to="/homelog" style={{color: 'black', fontWeight: 'bold'}}>Home</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link active" aria-current="page" to="/homelog/blog" style={{color: 'black', fontWeight: 'bold'}}>Blogs</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link active" aria-current="page" to="/homelog/qa" style={{color: 'black', fontWeight: 'bold'}}>Q&amp;A</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/homelog/aboutlog" style={{color: 'black', fontWeight: 'bold'}}>About us</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/homelog/contactlog" style={{color: 'black', fontWeight: 'bold'}}>Contact us</Link>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#" style={{color: 'black', fontWeight: 'bold'}}>{localStorage.getItem('client_name')}</a>
            </li>
            <li className="nav-item" style={{marginLeft: 40, marginRight: 40}}>
                <Link to="/homelog/notif">
              <img src="images/bell.png" alt="bell" height="40px" width="40px" />
              </Link>
            </li>
            <li>
              <button onClick={(e)=>{onSubmitHandler()}} className="btn btn-dark"> Log out </button>
            </li>
          </ul>
        </div>
      </center>
    </div>
  </nav>
</header>

            
        </>
    )
}

export default Headerlog
