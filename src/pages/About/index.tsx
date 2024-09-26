import { Helmet } from 'react-helmet';

import CardTech from '../../components/CardTech';
import TextSubTitulo from '../../components/Title';
import PhotoPerfil from '../../components/PhotoPerfil';
import AcademicCard from '../../components/AcademicCard';

import { cardAcademic, techSkills } from './utils/mock';

import {
  MainContainer, HeaderContainer, Title, SubTitle, AboutContent,
  SectionContent, Paragraph, TechSkillsStyled, SectionAcademic, Row,
} from './Styles';

function About() {
  return (
    <>
      <Helmet title="Portfolio - Sobre" />
      <MainContainer>
        <HeaderContainer>
          <PhotoPerfil text="Foto de perfil do André" />
          <Title>André Lucas</Title>
          <SubTitle>
            Software Developer
            <Row />
          </SubTitle>
        </HeaderContainer>
        <AboutContent>
          <SectionContent>
            <TextSubTitulo text="Sobre Mim" />
            <Paragraph>
              Olá, me chamo André Lucas, busco oportunidades que me permitam desenvolver minhas habilidades em um ambiente dinâmico e desafiador. Meu objetivo é contribuir para projetos inovadores, onde eu possa aplicar e aprimorar meus conhecimentos, enquanto trabalho em colaboração com equipes talentosas.
            </Paragraph>
            <Paragraph>
              Tenho experiência sólida em diversas tecnologias, com foco principal em Front-end: HTML5, CSS3, JavaScript, Angular, React, RTL (React Testing Library), Jest, Redux, TypeScript, Next.js, Design System, Sass, Styled Components, Tailwind CSS.
            </Paragraph>
            <Paragraph>
              Além disso, possuo também conhecimentos em Back-end: bancos de dados SQL e NoSQL, Express, APIs REST, JWT, ORM, POO, SOLID, Python, Node.js, C#, ASP.NET, .NET Core, .NET Framework, .NET e Docker.
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
                cardAcademic
                && cardAcademic.map(({ id, image, title, subTitle, data }) => (
                  <AcademicCard
                    key={ id }
                    image={ image }
                    title={ title }
                    subTitle={ subTitle }
                    data={ data }
                  />
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
