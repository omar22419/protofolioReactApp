import React from "react";

export default function Home() {
  return (
    <>
      <section id="Home" className="sectionBackGround vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <img
            className="my-1 w-75"
            src="src/assets/images/home_picture.png"
            alt=""
          />
          <h1 className="text-uppercase my-4">Start framework</h1>
          <div className="mb-3 d-flex justify-content-center align-items-center">
            <div className="decore me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="decore ms-3"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
