import React from "react";
import styled from "styled-components";

const MeterContainer = styled.div`
  padding: 1em 2em;
  width: 100%;
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
  width: ${props => `${props.width}%`};
`;

export function Meter({ width, bgColor, color }) {
  width = width < 3 && width !== 0 ? 3 : width > 100 ? 100 : width;
  return (
    <MeterContainer>
      <MeterBackground bgColor={bgColor}>
        <MeterInner width={width} color={color} />
      </MeterBackground>
    </MeterContainer>
  );
}

Meter.defaultProps = {
  width: 50
}