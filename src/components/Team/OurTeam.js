import React, { forwardRef } from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import TeamMember2 from "./TeamMember2";
import serviceData from "../../data/Team/service-data.json";

const OurTeam = forwardRef(({ title, tagline, extraSpace }, ref) => (
  <section
    className="pb-0 grey-bg"
    id="service"
    ref={ref}>
    {extraSpace === "true" ? (
      <div className="dn-bg-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : (
      ""
    )}
    <div className="row">
      <HeadingSection
        title={title}
        tagline={tagline}
      />
    </div>
    <div className="container-fluid">
      <div className="row mt-50">
        {serviceData.map((member, i) => {
          return (
            <TeamMember2
              key={member.id}
              name={member.title}
              role={member.subtitle}
              image={member.image}
              body={member.body}
              background={member.background}
              delay={i + 3}
              removePadding="true"
            />
          );
        })}
      </div>
    </div>
  </section>
));

export default OurTeam;
