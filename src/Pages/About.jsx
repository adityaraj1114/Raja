import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div>
      <div className="about">
        <div className="aboutCard">
          <div className="aboutHeading">
            <div className="aboutIcon">
              <span>
                <ion-icon name="person-outline"></ion-icon>
              </span>
            </div>
            <h2>About Us</h2>
          </div>

          <div className="aboutDetails">
            <p>
              Since "1995" 
              <br/>
              We are your trusted source for high-quality seasonal
              products. Whether you’re preparing for a festival or a special
              occasion, we have a wide range of items to meet your needs. 
              <br/>
              <br/>
              Our offerings include:
            </p>
            <ul>
              <li><p>Wedding Crackers</p></li>
              <li><p>Diwali Crackers</p></li>
              <li><p>Holi Colors & Accessories</p></li>
              <li><p>Rakhi for Rakshabandhan</p></li>
            </ul>

            <p>We cater to both retail and wholesale customers, ensuring that you have the best products for every celebration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
