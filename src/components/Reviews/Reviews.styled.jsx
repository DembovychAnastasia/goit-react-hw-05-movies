import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
`;

export const ReviewHeader = styled.h3`
  display: inline-block;
  font-size: 30px;
  font-weight: 700;

  color: #040404;
  margin-bottom: 20px;
  margin: 0 auto;
`;

export const ReviewList = styled.ul`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ReviewListItem = styled.li`
  padding-bottom: 10px;
  padding: 15px;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 32px 0px;
  }
`;

export const Author = styled.h4`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 220px;
  color: #000000;
 
`;

export const Review = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  text-align: justify;
  color: #040404;
  margin: 0 auto;
   
`;

export const NoReviewsText = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
  max-width: 500px;
  color: #000000;
  font-size: 16px;
`;