import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    padding: 16px;
    border: 2px dashed ${({theme}) => theme.yellow}
    color: ${({theme}) => theme.text_primary};
`;
const Image = styled.div`
  
`;

const GenerateImageCard = () => {
  return (
    <Container>
      <Image/>
    </Container>
  )
}

export default GenerateImageCard
