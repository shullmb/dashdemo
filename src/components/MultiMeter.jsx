import React from "react";
import { MeterContainer, MultiBackground, MultiInner } from './StyledMeterComponents';

export function MultiMeter({ values, bgColor, colors }) {
  values.sort( (a,b) => b - a);
  const inners = values.map( (value, i) => {
    value = value < 3 && value !== 0 ? 3 : value > 100 ? 100 : value;
    return <MultiInner key={i} value={value} color={colors[i]} />
  })

  return (
    <MeterContainer>
      <MultiBackground bgColor={bgColor}>
        { inners }
      </MultiBackground>
    </MeterContainer>
  );
}

MultiMeter.defaultProps = {
  values: [25,50,75],
  colors: ['red','blue','green']
}