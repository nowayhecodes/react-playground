import React, { Fragment } from "react";
import styled from "styled-components";
import { WiDaySunny, WiSnowflakeCold } from "react-icons/wi";

const ContentText = props => styled.h1`
  color: ${props.color}
`;

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat < 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const content =
    season === "summer" ? "Let's go to the beach" : "Uhh it's chilly";

  if (season === "summer") {
    return (
      <div>
        <WiDaySunny color="orange" size="300px" />
        <h1>{content}</h1>
        {/* <ContentText color="orange">{content}</ContentText> */}
      </div>
    );
  } else {
    return (
      <div>
        <WiSnowflakeCold color="lightblue" size="300px" />
        <h1>{content}</h1>
      </div>
    );
  }
};

export default SeasonDisplay;
