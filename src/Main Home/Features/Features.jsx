import React from 'react'
import "./features.css"
const Features = () => {
  return (
    <div id="Features">
      <div className="featuresWrapper">
          <div className="featureCard">
            <div className="featureIcon">
              <img src="./images/doctor.png" alt="" />
            </div>
            <div className="featureText">
              <h1>
            Profesionalizëm
              </h1>
              <p >Staf i mirëkualifikuar</p>
            </div>
          </div>
        <div className="featureCard">
          <div className="featureIcon">
            <img src="./images/pharmacy.png" alt="" />
          </div>
          <div className="featureText">
            <h1>
          Garanci
            </h1>
            <p >Garanci e produkteve në kohe reale.</p>
          </div>
        </div>
        <div className="featureCard">
          <div className="featureIcon">
            <img src="./images/shishe.png" alt="" />
          </div>
          <div className="featureText">
            <h1>
          Cilësi
            </h1>
            <p >Produkte Cilësore me marka me të fuqishme në treg.</p>
          </div>
      </div>
      <div className="featureCard">
            <div className="featureIcon">
              <img src="./images/insurance.png" alt="" />
            </div>
            <div className="featureText">
              <h1>
            Siguri
              </h1> 
              <p >Siguri e produkteve tona.</p>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Features