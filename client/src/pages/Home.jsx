import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';
import { GetPosts } from '../api/index.js';
import { CircularProgress } from '@mui/material';

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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const getPosts = async () => {
    setLoading(true);
    try {
      const res = await GetPosts();
      setPosts(res?.data?.data);
      setFilteredPosts(res?.data?.data);
      console.log(filteredPosts);
      
    }
    catch(error){
      setError(error?.response?.data?.message);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  },[]);

  useEffect(() => {
    if (!search) {
      setFilteredPosts(posts);
    }
    const filteredPosts = posts.filter((post) => {
      const promptMatch = post?.prompt?.toLowerCase().includes(search.toString().toLowerCase());
      const authorMatch = post?.author?.toLowerCase().includes(search.toString().toLowerCase());

      return promptMatch || authorMatch;
    });

    if (search) {
      setFilteredPosts(filteredPosts);
    }
  }, [posts, search]);

  return (
    <Container>
      <Headline>
        Explore popular posts in the Community!
        <Span>Generated with AI</Span>
      </Headline>
      <SearchBar
        search={search}
        setSearch = {setSearch}
      />
      <Wrapper>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {loading ? (
          <CircularProgress />
        ) : (
          <CardWrapper>
            {filteredPosts.length > 0 ? (
              <>
                {filteredPosts
                  .slice()
                  .reverse()
                  .map((item, index) => (
                    <ImageCard key={index} item={item} />
                  ))}
              </>
            ) : (
              <>No Posts Found !!</>
            )}
          </CardWrapper>
        )}
      </Wrapper>
    </Container>
  )
}

export default Home
