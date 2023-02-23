import React from 'react'

const Aboutlog = () => {
    return (
        <>
        <div>
       <div className="firstContainer" style={{marginTop: -120}}>
  <div className="FAQ">
    <h4>Home &gt; About Us</h4>
    <h1>About Us</h1>
  </div>
</div>

      
  <div className="BlogContainer" style={{marginTop: 40}}>
    <table>
      <tbody><tr>
          <td>
            <div className="Blog1">
              <img src="../images/blog3.jpg" width="650px" height="400px" alt="blog1" />
            </div>
          </td>
          <td style={{width: 500}}>
            <div className="Blog2">
              <h5 style={{color: 'brown', fontWeight: 'bold'}}>About Us</h5>
              <h1>We provide you the best experience to protect your bees</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et vehicula ex. Cras justo nisl, 
                sodales quis tincidunt in, mollis et ipsum. Ut ac massa sit amet risus facilisis placerat eu quis elit.
                Duis vel augue eros. Vestibulum convallis arcu non elit tincidunt, eleifend rhoncus nisl tristique. 
                Nullam non mi nec augue dignissim consectetur sit amet at lorem.
              </p>
            </div>
          </td>
        </tr>
      </tbody></table>
  </div>
  <div className="BlogContainer" id="contact" style={{marginTop: 20}}>
    <table>
      <tbody><tr>
          <td>
            <div className="adress">
              <div style={{backgroundColor: 'aliceblue', width: 400, height: 250, borderRadius: 10}}>
                <img src="../images/honey.png" width="70px" height="70px" alt="adress" style={{marginTop: 40, marginLeft: 160}} />
                <div style={{marginTop: 20, marginLeft: 155, fontWeight: 'bold'}}>Beekeeper</div>
              </div>
            </div>
          </td>
          <td>
            <div className="email">
              <div style={{backgroundColor: 'aliceblue', width: 400, height: 250, borderRadius: 10}}>
                <img src="../images/beehive.png" width="70px" height="70px" alt="adress" style={{marginTop: 40, marginLeft: 160}} />
                <div style={{marginTop: 20, marginLeft: 155, fontWeight: 'bold'}}>Bee Garden</div>
              </div>
            </div>
          </td>
          <td>
            <div className="phone">
              <div style={{backgroundColor: 'aliceblue', width: 400, height: 250, borderRadius: 10}}>
                <img src="../images/honey-jar.png" width="70px" height="70px" alt="adress" style={{marginTop: 40, marginLeft: 160}} />
                <div style={{marginTop: 20, marginLeft: 150, fontWeight: 'bold'}}>
                  BeeProducts
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody></table>
  </div>
</div>

            
        </>
    )
}

export default Aboutlog
