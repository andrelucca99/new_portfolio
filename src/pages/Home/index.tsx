import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Banner from '../../components/Banner';
import fotoBanner from '../../assets/images/Banner.svg';
import Card from '../../components/Card';

import project from '../../utils/data/projectHome.json';
import { devices } from '../../Theme';
import Button from '../../components/Button';
import TextSubTitulo from '../../components/Title';
import ImagePaper from '../../assets/images/paper.jpg';

import Photo from '../../assets/images/foto.jpg';

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

  /* background-color: yellow; */

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
    width: 50%;
    font-family: ${({ theme }) => theme.fonts.segundary};
    font-size: ${({ theme }) => theme.size.sm};
    font-weight: ${({ theme }) => theme.weight.regular};
    color: ${({ theme }) => theme.textColor.primary};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
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
    width: 60%;
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

const PerfilPhoto = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  margin-bottom: 20px;
`;

function Home() {
  return (
    <HomeStyled>
      <Helmet title="Portfolio - Home" />

      <SectionBanner>
        <div>
          <span>Seja bem vindos ao meu portfólio</span>
          <h2>Olá, eu sou André Lucas</h2>
          <p>
            Como desenvolvedor, sou apaixonado por
            aprender e compartilhar conhecimento, sempre aberto a novas conexões.
          </p>
          <Button text="Saiba mais" url="/sobre" />
        </div>
        <PerfilPhoto src={ Photo } alt="Foto de perfil do André" />
      </SectionBanner>

      <SectionPrincipal>
        <SectionProjects>
          <TextSubTitulo text="Projetos" />
          <div>
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
          </div>
          <Button text="Mais Projetos" url="/projetos" />
        </SectionProjects>
        <SectionArticles>
          <TextSubTitulo text="Artigos" />
          <div>
            <p>Em Breve</p>
            <img src={ ImagePaper } alt="" />
            <img src={ ImagePaper } alt="" />
            <img src={ ImagePaper } alt="" />
          </div>
          {/* <Button text="Veja Mais" url="/blog" /> */}
        </SectionArticles>
      </SectionPrincipal>

      <Banner image={ fotoBanner } />
    </HomeStyled>
  );
}

export default Home;
