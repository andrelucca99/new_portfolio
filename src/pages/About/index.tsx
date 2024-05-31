import { Helmet } from 'react-helmet';

import CardTech from '../../components/CardTech';
import TextSubTitulo from '../../components/Title';
import PhotoPerfil from '../../components/PhotoPerfil';

import Photo from '../../assets/images/foto.jpeg';
import { cardAcademic, techSkills } from './utils/mock';

import {
  MainContainer,
  HeaderContainer,
  Title,
  SubTitle,
  AboutContent,
  SectionContent,
  Paragraph,
  TechSkillsStyled,
  SectionAcademic,
  AcademicCard,
  Row,
} from './Styles';

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
