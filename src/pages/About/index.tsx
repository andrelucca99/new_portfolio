import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Photo from './assets/foto.jpg';
import CardTech from '../../components/CardTech';
import TextSubTitulo from '../../components/Title';
import PhotoPerfil from '../../components/PhotoPerfil';
import { cardAcademic, techSkills } from './utils/mock';
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
  margin: auto;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  row-gap: 20px;
`;

const SectionAcademic = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
  margin: 50px 0;
`;

const AcademicCard = styled.section`
  width: 500px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #566B86;
  background-color: #04244F;

  display: flex;
  align-items: flex-start;
  gap: 10px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }

  & section {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${devices.mobile} {
      align-items: center;
    }

    @media ${devices.tablet} {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media ${devices.mobile} {
    flex-direction: column;
    align-items: center;
  }

  @media ${devices.tablet} {
      flex-direction: row;
    }
`;

const Row = styled.hr`
  max-width: 100%;
  margin: auto;
  border: 1.5px solid ${({ theme }) => theme.bgFooter};
`;

function About() {
  return (
    <>
      <Helmet title="Portfolio - Sobre" />
      <MainContainer>
        <HeaderContainer>
          <PhotoPerfil image={ Photo } text="Foto de perfil do André" />
          <Title>André Lucas</Title>
          <SubTitle>
            Desenvolvedor Full Stack
            <Row />
          </SubTitle>
        </HeaderContainer>
        <AboutContent>
          <SectionContent>
            <TextSubTitulo text="Sobre Mim" />
            <Paragraph>
              Olá, sou André Lucas, um entusiasta do desenvolvimento web em
              busca contínua de soluções inovadoras para desafios do cotidiano,
              visando impactar positivamente a vida das pessoas através
              da acessibilidade e da tecnologia.
            </Paragraph>
            <Paragraph>
              Tenho experiência sólida em diversas tecnologias, com foco
              principal em Front-end: HTML5, CSS3, JavaScript, Angular,
              React, RTL (React Testing Library), Jest, Redux, TypeScript
              e Node.js. Além disso, possuo também conhecimento em Back-end:
              bancos de dados SQL e NoSQL, Express, APIs REST, JWT, ORM,
              POO, SOLID, Python e Docker.
            </Paragraph>
            <Paragraph>
              Sou apaixonado por aprender e compartilhar conhecimento,
              sempre aberto a novas conexões e oportunidades de crescimento mútuo.
            </Paragraph>
          </SectionContent>

          <SectionContent>
            <TextSubTitulo text="Formação Acadêmica" />

            <SectionAcademic>
              {
                cardAcademic && cardAcademic.map((item) => (
                  <AcademicCard key={ item.id }>
                    <img src={ item.image } alt="Foto da instituição" />
                    <section>
                      <h3>{item.title}</h3>
                      <span>
                        {item.subTitle}
                      </span>
                      <span>{item.data}</span>
                    </section>
                  </AcademicCard>
                ))
              }
            </SectionAcademic>
            <Row />
          </SectionContent>

          <SectionContent>
            <TextSubTitulo text="Tecnologias" />
            <TechSkillsStyled>
              {techSkills
              && techSkills.map((item) => (
                <CardTech
                  key={ item.linguagem }
                  image={ item.image }
                  title={ item.linguagem }
                />
              ))}
            </TechSkillsStyled>
          </SectionContent>

        </AboutContent>
      </MainContainer>
    </>
  );
}

export default About;
