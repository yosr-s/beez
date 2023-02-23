import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserService from '../service/UserService';


const Login = () => {
    const [Data, setData] = useState({});
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("dataaa",Data);
    UserService.authenticate(Data).then((res) => {
      console.log(res);
      console.log("helloooo");
      console.log("token",res.data.data.token);


      localStorage.setItem("client_name", res.data.data.user.name);
      localStorage.setItem("user_id_client", res.data.data.user._id);
      localStorage.setItem("user_email_client", res.data.data.user.email);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("refreshToken", res.data.data.refreshtoken);

      if (res.data.status == "success") {
        
        console.log("status",res.data.status);
        console.log("itemtype",res.data.data.user.itemtype);
        navigate("/homelog");
       
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "this account does not exist!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    });
  };
    return (
        <>
   <div className="row">
  <div className="col-md-7">
    <img src="assets/images/login1.jpg" className="d-block w-100" alt="..." style={{height: '100vh', marginLeft: 12}} />
  </div>
  <div className="col-md-5 " style={{backgroundColor: '#566573'}}>
    <div className="title" style={{color: 'black', fontWeight: 'bold'}}><h1>LOGIN</h1></div>
    <label htmlFor style={{color: 'black', marginLeft: 200, fontWeight: 'bold'}}>Nice to see you again</label>
    <div className="form_container">
      <form onSubmit={onSubmitHandler}  method="post">
        <div className="mb-3" style={{marginRight: 20}}>
          <label htmlFor="exampleInputEmail1" className="form-label" style={{color: 'black', fontWeight: 'bold'}}>Email address</label>
          <input onChange={onChangeHandler} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text" style={{color: 'black'}}>We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3" style={{marginRight: 20}}>
          <label htmlFor="exampleInputPassword1" className="form-label" style={{color: 'black', fontWeight: 'bold'}}>Password</label>
          <input onChange={onChangeHandler} name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <br />
        <button type="submit" className="btn btn-dark">Log in</button>
      </form>
    </div>
  </div>
</div>

            
        </>
    )
}

export default Login
