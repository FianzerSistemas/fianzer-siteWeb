import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";
import FooterCopyright from "./FooterCopyright";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoFooter}
                      alt=""
                    />
                  </a>
                </div>
                <p>
                  Trabajamos de la mano con la excelencia y la verdad, haciendo que las cosas sucedan.
                </p>
                <p>En Fianzer amamos lo que hacemos.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Matriz</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href="#!">Culiacán, Sinaloa</a>
                  </li>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href="http://maps.google.com/maps?q=BENITO+JUAREZ%2c+396%2f9%2c+CENTRO%2c+CULIACAN%2c+SIN%2c+C.P.+80000">Benito Juáres, 396-9, PTE. Centro, Culiacán, Sinaloa, C.P. 80000</a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:6677123204">(667)712-32-04</a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:6677124918">(667)712-49-18</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="mailto:hola@fianzer.com.mx">hola@fianzer.com.mx</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Oficinas</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href="#!">Los Mochis, Sinaloa</a>
                  </li>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href="#!">Hermosillo, Sonora</a>
                  </li>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href="#!">Nogales, Sonora</a>
                  </li>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href="#!">Guadalajara, Jalisco</a>
                  </li>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href="#!">Querétaro, Querétaro</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </>
);

export default FooterOne;
