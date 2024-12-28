import { CircularProgress } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border: 2px dashed ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.arrow + 80};
    border-radius: 20px;
`;
const Image = styled.div`
    width: 100%;
    object-fit: cover;
    berder-radius: 24px;
    background: ${({ theme }) => theme.black + 50};
`;

const GenerateImageCard = ({ src, loading }) => {
  return (
    <Container>
      {
        loading ? <><CircularProgress style={{color:"inherit", width:"24px", height:"24px"}}/> Generating your image...</> : (
          <>{src ? <><Image /></> : <>Write a prompt to generate the image</>}</>
        )
      }
    </Container>
  )
}

export default GenerateImageCard
