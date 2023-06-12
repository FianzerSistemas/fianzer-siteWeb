import React, { forwardRef } from "react";
import img from "../../assets/images/slides/home-bg-grey.png";
import imgLeft from "../../assets/images/story.png";
import imgRight from "../../assets/images/sotory2.png";
import ReactWOW from "react-wow";

const ParallaxAppStyle = forwardRef((props, ref) => (
  <section
    className="pt-0 pb-0"
    id="home"
    ref={ref}>
    <div
      className="full-screen-bg"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}>
      <div className="hero-text-wrap">
        <div className="hero-text blue-color hero-text-sm">
          <div className="container text-center">
            <div className="row">
              <div className="mb-20 blue col-md-12">
                <ReactWOW animation="fadeInUp">
                  <h3>DISEÑAMOS SEGUROS Y FINANZAS A TU MEDIDA</h3>
                </ReactWOW>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 text-center">
                <ReactWOW animation="fadeInLeft">
                  <img
                    src={imgLeft}
                    alt="Imagen 1"
                    className="img-responsive"
                    style={{ width: "448px", height: "416px", margin: "0 auto" }}
                  />
                </ReactWOW>
              </div>

              <div className="col-md-6 pt-20 hidden-sm hidden-xs text-center">
                <ReactWOW animation="fadeInRight">
                  <h4>COTIZA HOY</h4>
                  <img
                    src={imgRight}
                    alt="Imagen 2"
                    className="img-responsive"
                    style={{ width: "80%", height: "auto", margin: "0 auto" }}
                  />
                </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default ParallaxAppStyle;
