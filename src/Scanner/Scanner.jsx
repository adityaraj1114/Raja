import React from "react";
import { useState } from "preact/hooks";
import "./Scanner.css";
// import { About } from "../Pages/About";
import { ScannerPage } from "./ScannerPage";

export const Scanner = () => {

    const shareData = {
        title: 'My Portfolio',
        text: 'Check out my portfolio here:',
        url: 'https://shivamfancycracker.netlify.app/',
      };
    
      const handleShare = async () => {
        try {
          if (navigator.share) {
            await navigator.share(shareData);
            console.log('Portfolio shared successfully!');
          } else {
            console.log('Web Share API is not supported in your browser.');
          }
        } catch (error) {
          console.error('Error sharing:', error);
        }
      };


//   const [isFullSize, setIsFullSize] = useState(false);

//   const handleLogoClick = () => {
//     setIsFullSize(true);
//   };

//   const handleCancelClick = () => {
//     setIsFullSize(false);
//   };


  return (
    <div>
      <div className="scannerCard">
        <div className="scannerContainer">
          <div className="scannerBox">

          {/* {!isFullSize ? ( */}
            <a
            // onClick={handleLogoClick}
              href="##"
            //   target="_blank"     
              x
              rel="noopener noreferrer"
              className="iconScan"
            >
              <span>
                {/* <ion-icon name="logo-whatsapp"></ion-icon> */}
                <ion-icon name="scan-outline"></ion-icon>
                
              </span>
            </a>
                  {/* ) : ( */}
                    {/* <div className="scannerPage"> */}
                        {/* <ScannerPage /> */}
                    {/* </div> */}
                  {/* )} */}

            <a
              onClick={handleShare}
              href="##"
              target="_blank"
              x
              rel="noopener noreferrer"
              className="iconScan"
            >
              <span>
                {/* <ion-icon name="logo-whatsapp"></ion-icon> */}
                <ion-icon name="share-outline"></ion-icon>
              </span>
            </a>
          </div>

          <div className="addToContact">
            <a
              href="##"
              target="_blank"
              x
              rel="noopener noreferrer"
              className="iconAdd"
            >
              <p>Add To Contact</p>
              <span>
                {/* <ion-icon name="logo-whatsapp"></ion-icon> */}
                {/* <ion-icon name="call-outline"></ion-icon> */}
                <ion-icon name="add-circle-outline"></ion-icon>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
