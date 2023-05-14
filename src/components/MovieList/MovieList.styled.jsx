import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: #000000;
  /* margin: 0 auto; */
  padding: 20px 0px;
`;
export const StyledSectionForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  gap: 15px;
  color: #000;

  height: 100%;

  padding-left: 40px;
  padding-right: 40px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #000;
  text-decoration: none;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  color: #000000;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #de3614;
    text-shadow: 0 0 15px #635d5c;
  }
`;