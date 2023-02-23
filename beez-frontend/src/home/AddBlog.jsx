import React from 'react'

const AddBlog = () => {
    return (
        <>
       <div className="firstContainer" style={{marginTop: -120}}>
  <div className="FAQ">
    <h4>Home &gt; Add Blog</h4>
    <h1>Add a Blog</h1>
  </div>
</div>


     <div>
  <div className="BlogContainer" style={{marginLeft: 250}}>
  </div>
  <div className="form-container" style={{marginTop: -450}}>
    <form>
      <table className="formtable">
        <tbody><tr>
            <td><label htmlFor="subjectinput">Subject</label></td>
          </tr>
          <tr>
            <td><input className="input" name="subject" placeholder="Subject" /></td>
          </tr><tr>
            <td><label htmlFor="prob">Problem</label></td>
          </tr>
          <tr>
            <td><input className="input" name="email" placeholder="Problem" /></td>
          </tr>
          <tr>
            <td><label htmlFor="Content">Content</label></td>
          </tr>
          <tr>
            <td><input className="input" id="inputcontent" name="Content" placeholder="Add a post or a blog" /></td>
          </tr>
          <tr>
            <td>
              <label htmlFor="avatar">Choose a  picture to your Blog:</label><br />
              <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />                  
            </td>
          </tr>
          <tr>
            <td><input className="submitbutton" type="submit" defaultValue="Add Blog" /></td>
          </tr>
        </tbody></table>
    </form>
  </div>
</div>

            
        </>
    )
}

export default AddBlog
