import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../Theme';

const HomeStyled = styled.section`
  max-width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.laptop} {
    justify-content: center;
    gap: 55px;
    padding: 55px 0;
  }
`;

const SectionPrincipal = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const SectionBanner = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-around;
  padding: 10px;

  & div {
    font-family: ${({ theme }) => theme.fonts.segundary};
    font-size: ${({ theme }) => theme.size.sm};
    font-weight: ${({ theme }) => theme.weight.regular};
    color: ${({ theme }) => theme.textColor.primary};

    display: flex;
    flex-direction: column;
    
    justify-content: space-between;
    gap: 10px;

    @media ${devices.mobile} {
      width: 100%;
      text-align: center;
      align-items: center;
    }

    @media ${devices.laptop} {
      width: 50%;
      text-align: left;
      align-items: flex-start;
    }
  }

  & div > h2 {
    font-size: ${({ theme }) => theme.size.xl};
    color: ${({ theme }) => theme.textColor.segundary};
  }

  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

const SectionProjects = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media ${devices.tablet} {
    width: 80%;
    flex-flow: row wrap;
  }
`;

const SectionArticles = styled.article`
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media ${devices.tablet} {
    width: 20%;
  }

  & div {
    width: 212px;

    border: 1px solid #5a4aee;
    border-radius: 5px;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 5px;
  }
`;

const SectionUx = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const LayoutGridUx = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  & .card-left {
    width: 100%;
    height: 405px;
    background-color: #0E402D;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  & .card-right {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    & .roda-livre, .saude-agil {
      width: 100%;
      height: 200px;
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    & .roda-livre {
      background-color: #A55EEA;
    }

    & .saude-agil {
      background-color: #265A99;
    }
  }
  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

const LinkUx = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #04254f6f;
    opacity: 0.5;
    border-radius: 8px;
    border-bottom: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
  }
`;

export {
  HomeStyled,
  SectionPrincipal,
  SectionBanner,
  SectionProjects,
  SectionArticles,
  SectionUx,
  LayoutGridUx,
  LinkUx,
};
