import React from "react";
import Icofont from "react-icofont";
import ReactWOW from "react-wow";

const FeatureBoxThree = ({ index, icon, title, text }) => (
  <ReactWOW animation="fadeTop" delay={`0.${index}s`}>
    <div className="col-md-6 feature-box text-center col-sm-6">
      <Icofont
        icon={icon}
        className="font-40px blue-icon white-bg-icon circle-icon fade-icon"
      />
      <h4 className="upper-case">{title}</h4>
      <p className="mb-0">{text}</p>
    </div>
  </ReactWOW>
);

export default FeatureBoxThree;

