import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Banner from '../../components/Banner';
import fotoBanner from '../../assets/images/Banner.svg';
import Card from '../../components/Card';

import project from '../../utils/data/projectHome.json';
import { devices } from '../../Theme';
import Button from '../../components/Button';

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

  background-color: yellow;

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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionProjects = styled.section`
  width: 100%;

  background-color: red;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media ${devices.tablet} {
    width: 60%;
    flex-flow: row wrap;
  }
`;

const SectionArticles = styled.article`
  width: 80%;
  border: 1px solid #5a4aee;
  border-radius: 5px;
  text-align: center;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    width: 20%;
  }
`;

function Home() {
  return (
    <HomeStyled>
      <Helmet title="Portfolio - Home" />

      <SectionBanner>
        <Banner
          text="Olá, Sejam bem vindos ao meu portfólio"
          image={ fotoBanner }
        />
      </SectionBanner>

      <SectionPrincipal>
        <SectionProjects>
          {project
            && project.map((item) => (
              <Card
                key={ item.id }
                image={ item.imagem }
                title={ item.title }
                tech={ item.tech }
                repositorio={ item.repositorio }
                link={ item.link }
              />
            ))}
          <Button text="Mais Projetos" url="/projetos" />
        </SectionProjects>
        <SectionArticles>
          Em Breve
          <Button text="Veja Mais" url="/blog" />
        </SectionArticles>
      </SectionPrincipal>

      <Banner
        text="Blog"
        image={ fotoBanner }
      />
    </HomeStyled>
  );
}

export default Home;
