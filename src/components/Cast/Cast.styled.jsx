import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

export const CastHeader = styled.h3`
  font-size: 30px;
  font-weight: 700;

  color: #040404;
  margin-bottom: 20px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const CastListItem = styled.li`


  backdrop-filter: blur(10px);
  padding: 10px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  padding: 18px;
  border-radius: 4px;

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 32px 0px;
  }
`;

export const CastInfo = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  max-width: 220px;
  color: #000000;
  margin: 0 auto;
`;

export const CastName = styled.h3`
    margin-bottom: 20px;
`;

export const NoCastText = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  max-width: 500px;
`;

export const CastImg = styled.img`
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  display: block;
  width: 100%;
  /* height: 350px; */
  object-fit: cover;
  object-position: center;
`;