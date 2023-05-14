import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 20px 50px;

  display: flex;
  flex-flow: column wrap;

  list-style: none;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 15px;
  color: rgb(0, 0, 0);
  height: 100%;
  width: 100%;
  background: rgba(110, 110, 110, 0.25);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 32px 0px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-left: 40px;
  padding-right: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: #000000;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active,
  &:hover,
  &:focus {
    color: #fc0000;
    text-shadow: 0 0 15px #a4a2a2;
  }
`;


