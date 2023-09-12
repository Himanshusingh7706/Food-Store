import React from "react";

const Home = () => {
  return (
    <>
      <h1>Restaurants</h1>
      <section id="products" className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg"
                alt="Domino"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title"> Domino's Pizza</h5>
                <p className="rest-address">
                  {" "}
                  Ground Floor, MG Road Metro Station Reach, 1, Church St,
                  Bengaluru, Karnataka 560001
                </p>
                <div className="ratings mt-auto">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <span id="no_of_reviews">(35 Reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg"
                alt="Domino"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title"> Domino's Pizza</h5>
                <p className="rest-address">
                  {" "}
                  Ground Floor, MG Road Metro Station Reach, 1, Church St,
                  Bengaluru, Karnataka 560001
                </p>
                <div className="ratings mt-auto">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <span id="no_of_reviews">(35 Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
