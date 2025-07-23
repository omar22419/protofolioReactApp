import React from "react";

export default function Footer() {
  return (
    <>
      <section className="bg-darkBlue p-5 ">
        <div className="container">
          <div className="row py-4">
            <div className="col-md-4 sm-12">
              <div className="text-center">
                <h2 className="text-uppercase">location</h2>
                <p>2215 John Daniel Drive</p>
                <span>Clark, MO 65243</span>
              </div>
            </div>

            <div className="col-md-4 sm-12">
              <div className="text-center">
                <h2 className="text-uppercase">around the web</h2>
                <div className="py-1">
                  <span className="rounded-circle p-1 border">
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                  <span className="rounded-circle p-1 border mx-1">
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                  <span className="rounded-circle p-1 border mx-1">
                    <i className="fa-brands fa-linkedin"></i>
                  </span>
                  <span className="rounded-circle p-1 border mx-1">
                    <i className="fa-solid fa-globe"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 sm-12">
              <div className="text-center">
                <h2 className="text-uppercase">about freelancer</h2>
                <p>
                  Freelancer is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="p-4 d-flex justify-content-center align-items-center">
          <p className="mb-0">Copyright © Your Webiste 2021</p>
        </div>
      </footer>
    </>
  );
}
