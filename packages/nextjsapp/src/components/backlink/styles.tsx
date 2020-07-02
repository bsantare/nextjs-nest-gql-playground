import styled from 'styled-components';

export const Heading = styled.h1<{ red: boolean }>`
  color: ${(props) => (props.red ? 'red' : 'blue')};
`;

export const ImageContainer = styled.div`
  height: 100px;
  width: 100px;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
