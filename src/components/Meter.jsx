import React from "react";
import { MeterContainer, MeterBackground, MeterInner } from './StyledMeterComponents';

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
  value: 50
}