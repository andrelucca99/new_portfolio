import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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
  /* background-color: #ffd900; */
  padding: 55px 0; 
`;

const SectionPrincipal = styled.section`
  width: 100%;
  min-width: 80%;
  /* background-color: #1eff00c5; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin-bottom: 20px;

  @media ${devices.laptop} {
    flex-direction: row;
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
  width: 100%;
  max-width: 60%;
  /* background-color: #0004ff; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LinkProjects = styled(Link)`
  text-decoration: none;
  list-style: none;
  background-color: transparent;
  transition: all 0.2s ease-out;
  padding: 5px 20px;
  color: ${({ theme }) => theme.textColor.primary};
  border: 1px solid ${({ theme }) => theme.textColor.segundary};
  border-radius: 5px;
  margin: 20px 0;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.bgCardTech};
  }
`;

const SectionArticles = styled.article`
  width: 100%;
  max-width: 20%;
  border: 1px solid #5a4aee;
  border-radius: 5px;
  text-align: center;
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
          {/* <LinkProjects to="/projetos">
            Mais Projetos
          </LinkProjects> */}
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
