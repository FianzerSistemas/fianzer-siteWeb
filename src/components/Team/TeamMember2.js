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
}) => {
  const cardStyle = {
    background: background || "",
  };
  const handleClick = () => {
    const message = `Quiero información sobre el servicio "${name}"`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=123456789&text=${encodeURIComponent(
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
            className="img-responsive"
            alt={image}
          />
          <div
            className="member-caption"
            style={cardStyle}>
            <div className="member-description text-center">
              <div className="member-description-wrap-2">
                <h4 className="member-title">{name}</h4>
                <p className="member-subtitle">{role}</p>
                <div className="card-service-body">
                  {body.length <= 5 ? (
                    body.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  ) : (
                    <div className="row">
                      <div className="col-sm-6">
                        {body.slice(0, 5).map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="col-sm-6 text-small">
                        {body.slice(5).map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  )}
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
