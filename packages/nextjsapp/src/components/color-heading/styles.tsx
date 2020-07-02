import styled from 'styled-components';

export const Heading = styled.h1<{ color: string }>`
  color: ${(props) => (props.color ? props.color : 'black')};
`;
