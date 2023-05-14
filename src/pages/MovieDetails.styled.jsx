import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
 

  padding: 20px 40px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #e4c3ad;
  cursor: pointer;

  text-decoration: none;
  color: rgb(255, 255, 255);
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;

  border: 1px solid #ff3401;
  border-radius: 4px;
  padding: 5px;
  text-decoration: none;
  background-color: transparent ;
  color: #ff3401;
  margin-top: 30px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ff3401;
    color: #ffffff;
  }
`;