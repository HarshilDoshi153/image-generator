import React from 'react'
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';

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

const Headline = styled.div`
  font-size: 34px;
  font-weight: 500
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768){
    font-size: 22px;
  }

`;
const Span = styled.div`
font-size: 30px;
font-weight: 800;
color: ${({ theme }) => theme.secondary};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
`;
const CardWrapper = styled.div`
  display: grid;
  gap: 20px;
  @media(min-width: 1200px){
    grid-template-columns: repeat(4,1fr);
  }
  @media (min-width: 640px) and (max-width: 1199px){
    grid-template-columns: repeat(3,1fr);
  }
  @media(max-width: 639px){
    grid-template-columns: repeat(2,1fr);
  }
`;
const Home = () => {
  return (
    <Container>
      <Headline>
        Explore the posts of our community
        <Span>
          Generative AI
        </Span>
      </Headline>
      <SearchBar />
      <Wrapper>
        <CardWrapper>
          <ImageCard prompt="Hello World" author="Harshil" photo="https://tse3.mm.bing.net/th?id=OIP.j4KdqaXpnhbN94WzVyHUhAHaE8&pid=Api&P=0&h=220"/>
        </CardWrapper>
      </Wrapper>
    </Container>
  )
}

export default Home
