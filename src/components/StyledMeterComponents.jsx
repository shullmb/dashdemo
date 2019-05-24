import styled from 'styled-components';

 export const MeterContainer = styled.div`
  padding: 1em 2em;
  width: calc(100% - 4em);
  display: flex;
  align-items: center;
  justify-content: center;
`;

 export const MeterBackground = styled.div`
  border-radius: 10px;
  height: 1em;
  background: ${props => props.bgColor || "#c5c5c5"};
  width: 100%;
`;

 export const MeterInner = styled.div`
  border-radius: 10px;
  height: 1em;
  background: ${props => props.color || "coral"};
  width: ${props => `${props.value}%`};
`;

export const MultiBackground = styled(MeterBackground)`
  position: static;
`

export const MultiInner = styled(MeterInner)`
  position: fixed;
`;