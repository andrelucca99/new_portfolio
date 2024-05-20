/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-lines */
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import TextSubTitulo from '../../components/Title';
import PhotoPerfil from '../../components/PhotoPerfil';

import Photo from '../../assets/images/foto.jpg';
import RodaLivre from './assets/logo-rodaLivre.svg';
import SaudeAgil from './assets/logo-saudeAgil.svg';
import ImagePaper from '../../assets/images/paper.jpg';
import FloraExpress from './assets/logo-floraExpress.svg';

import { devices } from '../../Theme';
import project from '../../utils/data/projectHome.json';

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
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;

    @media ${devices.mobile} {
      width: 100%;
    }

    @media ${devices.laptop} {
      width: 50%;
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

function Home() {
  return (
    <HomeStyled>
      <Helmet title="Portfolio - Home" />

      <SectionBanner>
        <div>
          <span>Seja bem-vindos ao meu portfólio</span>
          <h2>Olá, eu sou André Lucas</h2>
          <p>
            Como desenvolvedor, sou apaixonado por
            aprender e compartilhar conhecimento, sempre aberto a novas conexões.
          </p>
          <Button text="Saiba mais" url="/sobre" />
        </div>
        <PhotoPerfil image={ Photo } text="Foto de perfil do André" />
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

      <SectionUx>
        <TextSubTitulo text="Projetos UX Design" />
        <LayoutGridUx>
          <LinkUx to="/ux/flora-express">
            <div className="card-left">
              <img src={ FloraExpress } alt="Logo do projeto Flora Express" />
              <h3>Flora Express</h3>
            </div>
          </LinkUx>
          <div className="card-right">
            <LinkUx to="/ux/roda-livre">
              <div className="roda-livre">
                <img src={ RodaLivre } alt="Logo do projeto Flora Express" />
                <h3>Roda Livre</h3>
              </div>
            </LinkUx>
            <LinkUx to="/ux/saude-agil">
              <div className="saude-agil">
                <img src={ SaudeAgil } alt="Logo do projeto Flora Express" />
                <h3>Saúde Ágil</h3>
              </div>
            </LinkUx>
          </div>
        </LayoutGridUx>
      </SectionUx>
    </HomeStyled>
  );
}

export default Home;
