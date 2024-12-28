import React from 'react'
import styled from 'styled-components';
import Button from './button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TextInput from './TextInput';

const Form = styled.div`
    flex:1;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap:9%;
    justify-content: center;
`;
const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;
const Title = styled.div`
    font-size: 28px;
    font-weight: 500;
    color: ${({theme}) => theme.text_primary};
`;
const Desc = styled.div`
    font-size: 17px;
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary};
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary};
`;
const Actions = styled.div`
    display: flex;
    flex: 1;
    gap: 8px;
    justify-content: space-between;
`;
const GenerateImageForm = ({
  post, setPost, createPostLoading, setCreatePostLoading, generateImageLoading, setGenerateImageLoading
}) => {
  const generateImageFun = () =>{
    setGenerateImageLoading(true);
  }
  const createPostFun = () =>{
    setCreatePostLoading(true);
  }
  return (
    <Form>
      <Top>
        <Title>Generate image with prompt</Title>
        <Desc>Write your prompt according to the image you want to generate</Desc>
      </Top>
      <Body>
        <TextInput label={"Author"} placeholder={"Enter Name"} value={post.author} handelChange={(e) => setPost({...post, author:e.target.value})}/>
        <TextInput label={"Enter Prompt"} placeholder={"Describe the detailed prompt to generate the image..."} textArea columns={200} rows={10} handelChange={(e) => setPost({...post, prompt: e.target.value})} value={post.prompt}/>
        <p style={{margin:0, fontSize:"14px", display:"flex", justifyContent:"center"}}>** You can post the AI generated image to the community **</p>
      </Body>
      <Actions>
        <Button text={"Generate Image"} flex={"true"} leftIcon={<AutoAwesomeIcon/>} isLoading={generateImageLoading} isDisabled={post.prompt === ""} onClick={() => generateImageFun()}></Button>
        <Button text={"Post Image"} flex={"true"} type={"secondary"} rightIcon={<ArrowOutwardIcon/>} isLoading={createPostLoading} isDisabled={post.author === "" || post.prompt === "" || post.photo === ""} onClick={() => createPostFun()}></Button>
      </Actions>
    </Form>
  )
}

export default GenerateImageForm
