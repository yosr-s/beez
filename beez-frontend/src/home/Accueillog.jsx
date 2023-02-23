import React from 'react'

const Accueillog = () => {
    return (
        <>
          <div id="carouselExample" className="carousel slide" style={{marginTop: -120}}>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="assets/images/silder11.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="assets/images/slider22.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="assets/images/slider33.jpg" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div style={{marginTop: 580}}>
    <img src="assets/images/slogan.png" className="d-block w-100" alt="..." />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <img src="assets/images/1.png" className="d-block w-100" alt="..." />
      </div>
      <div className="col-md-4">
        <img src="assets/images/2.png" className="d-block w-100" alt="..." />
      </div>
      <div className="col-md-4">
        <img src="assets/images/3.png" className="d-block w-100" alt="..." />
      </div>
    </div>
  </div>
  <br />
  <br />

            
        </>
    )
}

export default Accueillog
