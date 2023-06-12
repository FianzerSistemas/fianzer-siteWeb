import React, { forwardRef } from "react";
import ClientsBrand from "../../ClientsBrand/ClientsBrand";
import Icofont from "react-icofont";
import webImage from "../../../assets/images/clientes-grey.png";

const ContactApp = forwardRef((props, ref) => (
  <>
    <section
      className="contact-us grey-bg pt-10 pb-10"
      id="contact"
      ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 section-heading">
            <h2 className="font-700">NUESTROS ALIADOS</h2>
          </div>
        </div>
        <div className="hidden-md hidden-lg">
          <ClientsBrand />
        </div>
        <div className="hidden-xs hidden-sm text-center">
          <img
            src={webImage}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </section>

    <section
      className="contact-us grey-bg pb-10"
      id="contact"
      ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 section-heading">
            <h2 className="font-700">CONTÁCTANOS AHORA</h2>
          </div>
        </div>
      </div>
    </section>
    <section className="p-0">
      <div className="container-fluid">
        <div className="row row-flex">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="col-inner spacer dark-bg">
              <div className="text-center white-color">
                <Icofont
                  icon="phone"
                  className="font-50px white-icon"
                />
                <h2>Teléfonos</h2>
                <p className="mb-0">
                  <a href="tel:6677123204">(667) 712-32-04</a>
                </p>
                <p>
                  <a href="tel:6677124918">(667) 712-49-18</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="col-inner spacer primary-bg">
              <div className="text-center white-color">
                <Icofont
                  icon="email"
                  className="font-50px white-icon"
                />
                <h2>Correo</h2>
                <p className="mb-0">
                  <a href="mailto:hola@fianzer.com.mx">hola@fianzer.com.mx</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 full-width-on-sm">
            <div className="col-inner spacer dark-bg">
              <div className="text-center white-color">
                <Icofont
                  icon="whatsapp"
                  className="font-50px white-icon"
                />
                <h2>WhatsApp</h2>
                <p className="mb-0">
                  <a
                    href="https://api.whatsapp.com/send?phone=6674777888&text=Quiero%20informaci%C3%B3n%20sobre%20los%20servicios"
                    target="_blank"
                    rel="noopener noreferrer">
                    (667) 477-78-88
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
));

export default ContactApp;
