import React from "react";
import ReactWow from "react-wow";

const TeamMember2 = ({
  name,
  role,
  image,
  delay,
  removePadding,
  body,
  background,
  imgSmall
}) => {
  const cardStyle = {
    background: background || "",
  };
  const handleClick = () => {
    const message = `Quiero información sobre el servicio "${name}"`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=526674777888&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink);
  };
  return (
    <ReactWow
      animation="fadeInUp"
      delay={`0.${delay}s`}>
      <div
        className={
          "col-md-3 col-sm-6 col-xs-12 " +
          (removePadding === "true" ? "remove-padding" : "")
        }>
        <div className="team-member-container gallery-image-hover">
          <img
            src={require("../../assets/images/" + image)}
            className="img-responsive hidden-sm hidden-xs"
            alt={image}
          />
          <img
            src={require("../../assets/images/" + imgSmall)}
            className="img-responsive hidden-md hidden-lg"
            alt={imgSmall}
          />
          <div
            className="member-caption"
            style={cardStyle}>
            <div className="member-description text-center">
              <div className="member-description-wrap-2">
                <h2 className="member-title">{name}</h2>
                <p className="member-subtitle">
                 {role.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="card-service-body">
                  {body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <button
                    className="btn btn-primary btn-transparent"
                    onClick={handleClick}>
                    Más información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactWow>
  );
};

export default TeamMember2;
