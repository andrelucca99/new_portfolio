import styled from 'styled-components';
import { devices } from '../../Theme';

const MainContainer = styled.main`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const HeaderContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 55px 0;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.xl};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const SubTitle = styled.span`
  font-size: ${({ theme }) => theme.size.sm};
  font-weight: ${({ theme }) => theme.weight.regular};
`;

const AboutContent = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionContent = styled.section`
    width: 80%;
    text-align: center;
    font-weight: ${({ theme }) => theme.weight.regular};
    margin-bottom: 20px;

    @media ${devices.mobile} {
      width: 100%;
    }
`;

const Paragraph = styled.p`
  text-align: left;
  font-size: ${({ theme }) => theme.size.md};
  font-family: ${({ theme }) => theme.fonts.segundary};
  margin-bottom: 20px;
`;

const TechSkillsStyled = styled.section`
  width: 100%;
  display: grid;
  margin-bottom: 5%;

  @media ${devices.mobile} {
    grid-template-columns: repeat(2, 2fr);
    row-gap: 10px;
    column-gap: 5px;
  }

  @media ${devices.tablet} {
    grid-template-columns: repeat(4, 2fr);
    row-gap: 20px;
    column-gap: 10px;
  }

  @media ${devices.laptop} {
    grid-template-columns: repeat(6, 2fr);
  }
`;

const SectionAcademic = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
  margin: 50px 0;

  @media ${devices.laptop} {
    justify-content: center;
  }
`;

const Row = styled.hr`
  max-width: 100%;
  margin: auto;
  border: 1.5px solid ${({ theme }) => theme.bgFooter};
`;

export {
  MainContainer,
  HeaderContainer,
  Title,
  SubTitle,
  AboutContent,
  SectionContent,
  Paragraph,
  TechSkillsStyled,
  SectionAcademic,
  Row,
};
