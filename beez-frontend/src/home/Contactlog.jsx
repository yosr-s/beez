import React from 'react'

const Contactlog = () => {
    return (
        <>
      <div className="firstContainer" style={{marginTop: -120}}>
  <div className="FAQ">
    <h4>Home &gt; Contact Us</h4>
    <h1>Contact Detail</h1>
  </div>
</div>


       <div>
  <div className="BlogContainer" id="contact" style={{marginTop: 0}}>
    <table>
      <tbody><tr>
          <td>
            <div className="adress">
              <div style={{backgroundColor: 'aliceblue', width: 400, height: 250, borderRadius: 10}}>
                <img src="../images/adress_Logo.png" width="70px" height="70px" alt="adress" style={{marginTop: 40, marginLeft: 160}} />
                <div style={{marginTop: 20, marginLeft: 140, fontWeight: 'bold'}}>Sousse, Tunisia</div>
              </div>
            </div>
          </td>
          <td>
            <div className="email">
              <div style={{backgroundColor: 'aliceblue', width: 400, height: 250, borderRadius: 10}}>
                <img src="../images/email.png" width="70px" height="70px" alt="adress" style={{marginTop: 40, marginLeft: 160}} />
                <div style={{marginTop: 20, marginLeft: 100, fontWeight: 'bold'}}>codingMoon@gmail.com</div>
              </div>
            </div>
          </td>
          <td>
            <div className="phone">
              <div style={{backgroundColor: 'aliceblue', width: 400, height: 250, borderRadius: 10}}>
                <img src="../images/phone-call.png" width="70px" height="70px" alt="adress" style={{marginTop: 40, marginLeft: 160}} />
                <div style={{marginTop: 20, marginLeft: 160, fontWeight: 'bold'}}>
                  51700800<br />
                  24300200
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody></table>
  </div>
  <div className="form-container">
    <form>
      <table className="formtable">
        <tbody><tr>
            <td><label htmlFor="nameinput">Name</label></td>
          </tr>
          <tr>
            <td><input className="input" name="nameinput" placeholder="Name" /></td>
          </tr><tr>
            <td><label htmlFor="email">Email</label></td>
          </tr>
          <tr>
            <td><input className="input" name="email" placeholder="Email" /></td>
          </tr>
          <tr>
            <td><label htmlFor="phone">Phone</label></td>
          </tr>
          <tr>
            <td><input className="input" name="phone" placeholder="Phone" /></td>
          </tr>
          <tr>
            <td><label htmlFor="subject">Subject</label></td>
          </tr>
          <tr>
            <td><input className="input" name="subject" placeholder="Subject" /></td>
          </tr>
          <tr>
            <td><label htmlFor="Message">Message</label></td>
          </tr>
          <tr>
            <td><input className="input" id="inputmessage" name="Message" placeholder="Message" /></td>
          </tr>
          <tr>
            <td><input className="submitbutton" type="submit" defaultValue="Send My Message" /></td>
          </tr>
        </tbody></table>
    </form>
  </div>
</div>

            
        </>
    )
}

export default Contactlog
