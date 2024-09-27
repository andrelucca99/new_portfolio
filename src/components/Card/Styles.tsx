import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../Theme';

const CardContainer = styled.div`
  width: 300px;
  color: #fff;
  border-radius: 12px;
  background-color: #001634;
  font-family: ${({ theme }) => theme.fonts.primary};
  & h1 {
    font-size: ${({ theme }) => theme.size.sm};
    font-weight: ${({ theme }) => theme.weight.medium};
  }

  @media ${devices.desktop} {
    width: 400px;
  }
`;

const CardImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: fill;
  border-radius: 10px 10px 0 0;
  transition: all 0.2s ease-out;

  &:hover {
    opacity: 80%;
  }

  @media ${devices.laptop} {
    height: 200px;
  }

  @media ${devices.desktop} {
    height: 250px;
  }
`;

const CardContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 20px;

  & h1 {
    width: 100%;
  }
`;

const CardContentDetails = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  gap: 1px;

  & div > span {
    font-size: ${({ theme }) => theme.size.xs};
    font-weight: ${({ theme }) => theme.weight.regular};
  }

`;

const LinkImage = styled(Link)`
  & :hover{
    transform: scale(0.9);
    border-radius: 20px;
    border: 2px solid #060231;
  }
`;

const Row = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.textColor.segundary};
  margin-bottom: 5px;
`;

export {
  CardContainer,
  CardImage,
  CardContent,
  CardContentDetails,
  LinkImage,
  Row,
};
