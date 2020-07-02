import styled from 'styled-components';

export const CenteringContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 500px;
`;

export const FlowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const CenteringBorderContainer = styled(CenteringContainer)`
  border: 1px;
  border-style: solid;
  padding: 20px;
  margin: 10px;
  max-width: 300px;
  min-height: 125px;
`;
