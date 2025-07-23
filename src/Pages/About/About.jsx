import React from "react";

export default function About() {
  return (
    <>
      <section className="vh-100 sectionBackGround d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text-uppercase">about component</h1>
              <div className="mb-3 d-flex justify-content-center align-items-center">
                <div className="decore me-3"></div>
                <i className="fa-solid fa-star"></i>
                <div className="decore ms-3"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
