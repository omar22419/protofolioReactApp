import { useState } from "react";

import picture1 from "../../assets/images/1.png";
import picture2 from "../../assets/images/2.png";
import picture3 from "../../assets/images/3.png";

const images = [picture1, picture2, picture3];
export default function Portfolio() {
    const [currentImage,setCurrentImage]= useState(null);

    function handleCurrentImage(image){
        setCurrentImage(image);
    }


    //   const detail = document.getElementById("details");
//   window.addEventListener("click", function (e) {
//     if (e.target == detail) {
//       detail.classList.add("d-none");
//     }
//   });




  return (
    <>
      <section className="container vh-100 mb-5">
        <div className="header text-center text-uppercase my-4">
          <h1 className="fw-bold">portfolio component</h1>
          <div className="mb-3 d-flex justify-content-center align-items-center">
            <div className="decore me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="decore ms-3"></div>
          </div>
        </div>
        <div className="row g-5">
          {[...images,...images].map((image) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => {
                  document.getElementById("details").classList.remove("d-none");
                  handleCurrentImage(image);
                }}
              >
                <div className="position-relative overflow-hidden">
                  <img src={image} className="w-100 rounded-3 " alt="" />
                  <div className="layer start-0 w-100 h-100 top-0 position-absolute d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-5x"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div onClick={(e) =>{
                    if(e.target.classList.contains('imag')){
                        console.log('this is image');
                    }
                    else{
                        document.getElementById('details').classList.add('d-none');
                    }
                }}
        id="details"
        className={`position-fixed start-0 w-100 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center top-0 z-3 d-none`}
      >
        <img src={currentImage} className="imag" alt="" />
      </div>
    </>
  );
}
