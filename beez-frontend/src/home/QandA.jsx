import React from 'react'

const QandA = () => {
    return (
        <>
        <div className="firstContainer" style={{marginTop: -120}}>
  <div className="FAQ">
    <h4>Home &gt; FAQ</h4>
    <h1>Frequently Asked Questions</h1>
  </div>
</div>


       <div>
  <div className="secondContainer" style={{marginTop: -200}}>
    <div className="popularQ">
      <h6>POPULAR Questions</h6>
      <h3>Frequently Asked Questions</h3>
      <p>popular Questions</p>
      <img src="../images/honey.jpg" alt="honey" width="300px" height="300px" />
    </div>
    <div className="faq-content" style={{marginLeft: 200}}>
      <div className="faq-question">
        <input id="q1" type="checkbox" className="panel" />
        <div className="plus">+</div>
        <label htmlFor="q1" className="panel-title">How can i find the information?</label>
        <div className="panel-content">About Us</div>
      </div>
      <div className="faq-question">
        <input id="q2" type="checkbox" className="panel" />
        <div className="plus">+</div>
        <label htmlFor="q2" className="panel-title">How can i protect bees from hornets?</label>
        <div className="panel-content">bees nest</div>
      </div>
      <div className="faq-question">
        <input id="q3" type="checkbox" className="panel" />
        <div className="plus">+</div>
        <label htmlFor="q3" className="panel-title">what are your terms and conditions?</label>
        <div className="panel-content">Privacy <a href="https://en.wikipedia.org/wiki/The_Unanswered_Question" target="_blank">unanswered</a></div>
      </div>
    </div>
  </div>
  <div className="QandA" style={{marginTop: 40}}>
    <h1>Questions &amp; Answers</h1>
    <div className="contentQ">
      <h3>Question 1:</h3>
      <h4>Answers of Question 1</h4>
      <form action="submit">
        <div className="input-group input-group-sm mb-3" style={{textAlign: 'left', marginLeft: 0}}>
          <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          <button className="bg-opacity-5 bg-warning" style={{marginLeft: 10}}>Reply</button>
        </div>
      </form>
    </div>
    <div className="input-group">
      <input type="text" className="form-control" placeholder="ASK A QUESTION..." />
    </div>
  </div>
</div>

            
        </>
    )
}

export default QandA
