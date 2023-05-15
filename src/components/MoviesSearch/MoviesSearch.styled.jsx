import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  
  width: 280px;
  margin-right: 10px;
  
  border: 0.5px solid #ff3401;
  outline: 0px;
  border-radius: 4px;
  padding: 10px 10px;

  &:focus-within {
    border-bottom: 1px solid #ff3401;
    box-shadow: 0 0 15px #ff3401;
    border-radius: 5px;
  }
  &::placeholder {
    color: #ff3401;
  }
`;

export const Button = styled.button`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 16px;
    border: 1px solid rgb(255, 52, 1);
    border-radius: 4px;
    padding: 5px;
    text-decoration: none;
    background-color: transparent;
    color: rgb(255, 52, 1);
  
    cursor: pointer;
  

  &:hover, 
  &:focus {
    
    color: #ff3401;
    fill: #ff3401;
    stroke: #ff3401;
  }
`;