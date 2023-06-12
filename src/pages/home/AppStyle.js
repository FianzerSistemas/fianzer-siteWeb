import React, { useRef } from "react";
import Loader from "./../../components/Loader/Loader";
import dataNav from "../../data/Navbar/nav-appstyle-data.json";
import HeaderFive from "../../components/Header/HeaderFive";
import ParallaxAppStyle from "../../components/HeroParallax/ParallaxAppStyle";
import AboutAppStyle from "../../components/AboutUs/AboutAppStyle";
import ContactApp from "../../components/ContactUs/AppStyle/ContactApp";
import OurTeam from "../../components/Team/OurTeam";
import FooterOne from "../../components/Footer/FooterOne";


const AppStyle = () => {
  const home = useRef();
  const feature = useRef();
  const service = useRef();
  const review = useRef();
  const contact = useRef();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "feature":
        feature.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "service":
        service.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "review":
        review.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
    }
  };

  return (
    <Loader>
      <HeaderFive
        data={dataNav}
        scrollToSection={scrollToSection}
      />
      <ParallaxAppStyle ref={home} />
      <OurTeam
        title="EXPLORA TODO LO QUE TENEMOS PARA OFRECERTE"
        tagline=""
        ref={service}
      />
      <AboutAppStyle ref={feature} />
      <ContactApp ref={contact} />
      <FooterOne />
    </Loader>
  );
};

export default AppStyle;
