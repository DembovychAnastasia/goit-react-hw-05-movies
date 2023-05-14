import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 400px;
`;

export const MovieInfo = styled.div`
  padding-top: 20px;
`;

export const MovieName = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #010101;
  margin: 0;
  margin-bottom: 20px;
`;

export const MovieInfoText = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #171716;
  
`;

export const MovieInfoTextBold = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;

export const MoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
`;

export const MoreInfoHeader = styled.h3`
text-align: left;
  font-size: 30px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  flex-direction: row;

  border: 1px solid #ff3401;
  border-radius: 4px;
  padding: 5px;
 
  background-color: transparent;
  
  text-decoration: none;
  color: #ff3401;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ff3401;
    color: #ffffff;

  }
`;