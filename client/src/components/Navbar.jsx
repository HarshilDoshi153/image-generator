import React from 'react'
import Button from './button';
import { useNavigate, useLocation } from 'react-router-dom';
import { AddRounded, ExploreRounded } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center
  box-shadow: 0 0 10px rgba(0,0,0,0.15)
  @media only screen and (max-width: 600px){
    padding: 10px 12px;
  }
`
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/');
  return (
    <Container>
      <div style={{ alignContent: "center" }}>GenAI</div>
      {
        path[1] === "post" ? (<Button text="Explore Posts" leftIcon={<ExploreRounded />} onClick={() => navigate("/")} type="secondary" />) : (<Button text="Create new post" leftIcon={<AddRounded />} onClick={() => navigate("/post")} />)
      }
    </Container>
  )
}

export default Navbar
