import React from 'react'
import styled from 'styled-components'
import GenerateImageForm from '../components/GenerateImageForm';
import GenerateImageCard from '../components/GenerateImageCard';

const Container = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.bg};
  overflow-y: scroll;
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768){
    padding: 6px 10px
  }
`;

const Wrapper = styled.div`
  flex: 1;
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 8%;
  max-width: 1400px;
  padding: 32px 0px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`;

const CreatePost = () => {
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm/>
        <GenerateImageCard/>
      </Wrapper>
    </Container>
  )
}

export default CreatePost
