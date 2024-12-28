import React, { useState } from 'react'
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
  justify-content: center;
  gap: 20px;
  @media (max-width: 768){
    padding: 6px 10px
  }
`;

const Wrapper = styled.div`
  width: 100%;
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
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    author: "",
    prompt: "",
    photo: ""
  })
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm post={post} setPost={setPost} createPostLoading={createPostLoading} setCreatePostLoading={setCreatePostLoading} generateImageLoading={generateImageLoading} setGenerateImageLoading={setGenerateImageLoading}/>
        <GenerateImageCard loading={generateImageLoading} src={post.photo}/>
      </Wrapper>
    </Container>
  )
}

export default CreatePost
