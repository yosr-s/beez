import React, { useEffect, useState } from 'react'
import WarningService from '../service/WarningService';


const Notif = () => {
    const [Data, setData] = useState({});

  const getAll=()=>{
    console.log("hello")
    WarningService.getAll()
    .then((res)=>{
        console.log("res",res.data)
        setData(res.data.data)
    })
    .catch((err)=>{
        console.log(err)
    })
};
useEffect(()=>{
  getAll()
},[]);

    return (
        <>
        <div className="firstContainer"  style={{marginTop: -120}}>
  <div className="FAQ">
    <h4>Home &gt; NOTIFICATIONS</h4>
    <h1>WARNING ALERTS</h1>
  </div>
</div>

     <div className="BlogContainer" style={{marginLeft: 250,marginTop: 40}}>
  <table>
    <tbody><tr>
        <td>
          <div className="Blog1">
            <img src="../images/warning.png" width="400px" height="400px" alt="blog1" />
          </div>
        </td>
        <td style={{width: 500}}>
          <div className="Blog2">
            <h5 style={{color: 'red', fontWeight: 'bold'}}>Warning!!</h5>
            <h1>there is an hornets attack... Be careful on your bees</h1>
            <h5>time  00:00:00 {Data.time}</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et vehicula ex. Cras justo nisl, 
              sodales quis tincidunt in, mollis et ipsum.
            </p>
          </div>
        </td>
      </tr>
    </tbody></table>
    <center>
    <button class="btn btn-danger">Well recieved!</button>
    </center>

</div>

            
        </>
    )
}

export default Notif
