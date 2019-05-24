import React from "react";
import styled from "styled-components";

const MeterContainer = styled.div`
  padding: 1em 2em;
  width: calc(100% - 4em);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MeterBackground = styled.div`
  border-radius: 10px;
  height: 1em;
  background: ${props => props.bgColor || "#c5c5c5"};
  width: 100%;
`;

const MeterInner = styled.div`
  border-radius: 10px;
  height: 1em;
  background: ${props => props.color || "coral"};
  width: ${props => `${props.value}%`};
`;

export function Meter({ value, bgColor, color }) {
  value = value < 3 && value !== 0 ? 3 : value > 100 ? 100 : value;
  return (
    <MeterContainer>
      <MeterBackground bgColor={bgColor}>
        <MeterInner value={value} color={color} />
      </MeterBackground>
    </MeterContainer>
  );
}

Meter.defaultProps = {
  width: 50
}