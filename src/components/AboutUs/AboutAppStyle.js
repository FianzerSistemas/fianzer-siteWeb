import React, { forwardRef } from "react";
import ReactWow from "react-wow";
import dataAbout from "../../data/About/about-appstyle-data.json";
import dataSmallAbout from "../../data/About/about-appstyle-small-data.json";
import img from "../../assets/images/slides/1x/about-gig-transparent.png";
import Icofont from "react-icofont";

const AboutAppStyle = forwardRef((props, ref) => (
  <section
    className="main-section grey-bg pb-0"
    id="feature"
    ref={ref}>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <ReactWow
            animation="fadeInUp"
            delay="0.1s">
            <h3 className="font-700">
              MÁS DE 30 AÑOS DE EXPERIENCIA NOS RESPALDA
            </h3>
          </ReactWow>
        </div>
      </div>
      <div className="row mt-50 hidden-xs hidden-sm">
        <div className="col-md-4 col-sm-12">
          <div className="pt-100 pb-100 pull-left">
            {dataAbout
              .filter((v, i) => i < 4)
              .map((feature, i) => (
                <ReactWow
                  key={feature.id}
                  animation="fadeInLeft"
                  delay={`0.${i + 1}s`}>
                  <div className="feature-box text-left">
                    <div className="pull-left">
                      <Icofont
                        icon={feature.icon}
                        className="font-50px blue-icon"
                      />
                    </div>
                    <div className="pull-right">
                      <h4 className="mt-0">{feature.title}</h4>
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </ReactWow>
              ))}
          </div>
        </div>
        <ReactWow
          animation="fadeInUp"
          delay="0.2s">
          <div className="col-md-4 col-sm-12 hidden-xs hidden-sm">
            <img
              className="img-responsive"
              src={img}
              alt=""
            />
          </div>
        </ReactWow>
        <div className="col-md-4 col-sm-12">
          <div className="pt-100 pb-100 pull-left">
            {dataAbout
              .filter((v, i) => i > 3)
              .map((feature, i) => (
                <ReactWow
                  key={feature.id}
                  animation="fadeInRight"
                  delay={`0.${i + 1}s`}>
                  <div className="feature-box-right text-right">
                    <div className="pull-right">
                      <Icofont
                        icon={feature.icon}
                        className="font-50px blue-icon"
                      />
                    </div>
                    <div className="pull-left">
                      <h4 className="mt-0">{feature.title}</h4>
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </ReactWow>
              ))}
          </div>
        </div>
      </div>
      <div className="row mt-50 hidden-md hidden-lg">
        <div className="col-md-4 col-sm-12">
          <div className="pt-100 pb-100 pull-left">
            {dataSmallAbout
              .filter((v, i) => i < 7)
              .map((feature, i) => (
                <ReactWow
                  key={feature.id}
                  animation="fadeInLeft"
                  delay={`0.${i + 1}s`}>
                  <div className="feature-box text-left">
                    <div className="pull-left">
                      <Icofont
                        icon={feature.icon}
                        className="font-50px blue-icon"
                      />
                    </div>
                    <div className="pull-right">
                      <h4 className="mt-0">{feature.title}</h4>
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </ReactWow>
              ))}
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default AboutAppStyle;
