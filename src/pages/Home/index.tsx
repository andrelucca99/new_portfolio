import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Banner from '../../components/Banner';
import fotoBanner from '../../assets/images/Banner.svg';
import Card from '../../components/Card';

import project from '../../utils/data/projectHome.json';
import { devices } from '../../Theme';
import Button from '../../components/Button';

const HomeStyled = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 55px;
  padding: 55px 0; 
`;

const SectionPrincipal = styled.section`
  width: 100%;
  min-width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;

  @media ${devices.laptop} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const SectionBanner = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`;

const SectionProjects = styled.section`
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media ${devices.tablet} {
    width: 60%;
  }
`;

const SectionArticles = styled.article`
  height: 100vh;
  width: 80%;
  border: 1px solid #5a4aee;
  border-radius: 5px;
  text-align: center;

  @media ${devices.tablet} {
    width: 80%;
  }

  @media ${devices.laptop} {
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
          artigos
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
