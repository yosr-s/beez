import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <>
        <div className="firstContainer" style={{marginTop: -120}}>
  <div className="FAQ">
    <h4>Home &gt; Blog</h4>
    <h1>Blog &amp; News</h1>
  </div>
</div>

      <div className="BlogContainer" style={{marginTop: 20}}>
        <Link to="/homelog/addblog">
  <button className="btn btn-primary" style={{marginLeft: '91%', marginBottom: 20}}>ADD BLOG</button>
  </Link>
  <table>
    <tbody><tr>
        <td>
          <div className="Blog1">
            <img src="../images/blog1.jpg" width="400px" height="250px" alt="blog1" />
            <h4>Beyond Beekeeping  --  Bee Marketing</h4>
            <h6>february 15,2023</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et vehicula ex. Cras justo nisl, 
              sodales quis tincidunt in, mollis et ipsum. Ut ac massa sit amet risus facilisis placerat eu quis elit.
              Duis vel augue eros. Vestibulum convallis arcu non elit tincidunt, eleifend rhoncus nisl tristique. 
              Nullam non mi nec augue dignissim consectetur sit amet at lorem.
            </p>
          </div>
        </td>
        <td>
          <div className="Blog2">
            <img src="../images/blog2.jpg" width="400px" height="250px" alt="blog1" />
            <h4>Plant and Design your Own Bee Garden</h4>
            <h6>february 15,2023</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et vehicula ex. Cras justo nisl, 
              sodales quis tincidunt in, mollis et ipsum. Ut ac massa sit amet risus facilisis placerat eu quis elit.
              Duis vel augue eros. Vestibulum convallis arcu non elit tincidunt, eleifend rhoncus nisl tristique. 
              Nullam non mi nec augue dignissim consectetur sit amet at lorem.
            </p>
          </div>
        </td>
        <td>
          <div className="Blog3">
            <img src="../images/blog3.jpg" width="400px" height="250px" alt="blog1" />
            <h4>Learn How to Become a good Beekeeper</h4>
            <h6>february 15,2023</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et vehicula ex. Cras justo nisl, 
              sodales quis tincidunt in, mollis et ipsum. Ut ac massa sit amet risus facilisis placerat eu quis elit.
              Duis vel augue eros. Vestibulum convallis arcu non elit tincidunt, eleifend rhoncus nisl tristique. 
              Nullam non mi nec augue dignissim consectetur sit amet at lorem.
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="Blog4">
            <img src="../images/blog4.jpg" width="400px" height="250px" alt="blog1" />
            <h4>Supering your Colony for a Honey Flow</h4>
            <h6>february 15,2023</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et vehicula ex. Cras justo nisl, 
              sodales quis tincidunt in, mollis et ipsum. Ut ac massa sit amet risus facilisis placerat eu quis elit.
              Duis vel augue eros. Vestibulum convallis arcu non elit tincidunt, eleifend rhoncus nisl tristique. 
              Nullam non mi nec augue dignissim consectetur sit amet at lorem.
            </p>
          </div>
        </td>
        <td>
          <div className="Blog5">
            <img src="../images/blog5.jpg" width="400px" height="250px" alt="blog1" />
            <h4>Selecting Bees for Environmental Resilience</h4>
            <h6>february 15,2023</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et vehicula ex. Cras justo nisl, 
              sodales quis tincidunt in, mollis et ipsum. Ut ac massa sit amet risus facilisis placerat eu quis elit.
              Duis vel augue eros. Vestibulum convallis arcu non elit tincidunt, eleifend rhoncus nisl tristique. 
              Nullam non mi nec augue dignissim consectetur sit amet at lorem.
            </p>
          </div>
        </td>
        <td>
          <div className="Blog6">
            <img src="../images/blog6.jpg" width="400px" height="250px" alt="blog1" />
            <h4>Hive Management and Swarm/Bee Removal</h4>
            <h6>february 15,2023</h6>
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


            
        </>
    )
}

export default Blog
