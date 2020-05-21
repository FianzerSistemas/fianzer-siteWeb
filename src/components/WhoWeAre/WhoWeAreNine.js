import React from "react";
import featuresData from "../../data/About/about-page-data.json";
import FeatureBoxThree from "../../elements/FeatureBox/FeatureBoxThree";

const WhoWeAreNine = () => (
  <section>
    <div className="container">
      <div className="row">
        {featuresData.map((feature) => (
          <FeatureBoxThree
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreNine;
