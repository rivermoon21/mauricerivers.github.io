import React from "react";
import Hero from "../components/Hero";

function SocialsPage(props) {
  return(
    <div className="rm-title-div">
      <Hero title={props.title} />
    </div>
  )
}

export default SocialsPage;
