import React from "react";
import { ProfileType } from "@wkocjan/gatsby-theme-intro/src/types";

const About = ({ about }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      À propos
    </h5>
    <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line">
      {about}
    </div>
  </>
);

About.propTypes = {
  about: ProfileType.about,
};

export default About;
