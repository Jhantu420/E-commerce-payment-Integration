import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div id="footer">
      <footer id="foot" className="text-center text-lg-start  text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span id="span">Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="#" className="me-4 text-reset">
              <i className="fa fa-facebook-f"></i>
            </a>

            <a href="#" className="me-4 text-reset">
              <i className="fa fa-google"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fa fa-gem me-3"></i>InkyIdeas
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fa fa-home me-3"></i>Kalyani Webel IT Phase-II
                </p>
                <p>
                  <i className="fa fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fa fa-phone me-3"></i> + 01 234 567 88
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "lightblue" }}
        >
          © 2023 Copyright :
          <a
            className="text-reset fw-bold"
            href="https://inkyideas.in/"
            target="_blank"
          >
            {" "}
            inkyideas.in
          </a>
        </div>
      </footer>
    </div>
  );
}
