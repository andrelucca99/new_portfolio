import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Photo from './assets/foto.jpg';
import CardTech from '../../components/CardTech';
import TextSubTitulo from '../../components/Title';
import { cardAcademic, techSkills } from './utils/mock';

const HeaderContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 55px 0;
`;

const PerfilPhoto = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  margin-bottom: 20px;
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

const Paragraph = styled.p`
  text-align: left;
  font-size: ${({ theme }) => theme.size.sm};
  margin-bottom: 20px;
`;

const SectionContent = styled.section`
    width: 80%;
    text-align: center;
    font-weight: ${({ theme }) => theme.weight.regular};
    margin-bottom: 20px;
`;

const TechSkillsStyled = styled.section`
  width: 100%;
  max-width: 80%;
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
  }
`;

const Row = styled.hr`
  max-width: 90%;
  margin: auto;
  border: 1.5px solid ${({ theme }) => theme.bgFooter};
  margin-top: 20px;
`;

function About() {
  return (
    <>
      <Helmet title="Portfolio - Sobre" />
      <main>
        <HeaderContainer>
          <PerfilPhoto src={ Photo } alt="Foto de perfil do André" />
          <Title>André Lucas</Title>
          <SubTitle>
            Desenvolvedor Front-end
            <Row />
          </SubTitle>
        </HeaderContainer>
        <AboutContent>
          <SectionContent>
            <TextSubTitulo text="Sobre Mim" />
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Expedita, fugit? Voluptates itaque at laborum vitae delectus
              nobis hic, modi quibusdam nesciunt est quia doloremque dolorum
              assumenda aspernatur voluptatum et omnis?
              Quasi ea iusto atque aut, dolores illo numquam iure voluptates,
              suscipit, harum doloremque maiores at! Fuga sed eveniet impedit
              officiis nesciunt consequatur corporis, cupiditate maxime earum
              repudiandae neque excepturi hic?
            </Paragraph>
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
            <Row />
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
          </SectionContent>

          <SectionContent>
            <TextSubTitulo text="Experiências" />
          </SectionContent>
        </AboutContent>
      </main>
    </>
  );
}

export default About;
