import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="vawe">
          <div className="row m-0">
            <div className="col-12 col-md-5 font landing-page text-center text-md-start">
              <h1>Cooking with love provides food for the soul</h1>
              <Link to="/sign_in"><button className="btn sign_up__page rounded-pill font px-3" type="submit">Start Cooking</button></Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home;
