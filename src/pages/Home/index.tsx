import { Helmet } from 'react-helmet';

import Card from '../../components/Card';
import Button from '../../components/Button';
import TextSubTitulo from '../../components/Title';
import PhotoPerfil from '../../components/PhotoPerfil';

import project from './utils/projectHome.json';

import {
  HomeStyled, SectionPrincipal, SectionBanner, SectionProjects,
  SectionArticles, CardsProjects,
} from './Styles';
import { SectionAcademic } from '../About/Styles';
import { cardAcademic } from '../About/utils/mock';
import AcademicCard from '../../components/AcademicCard';

function Home() {
  return (
    <HomeStyled>
      <Helmet title="Portfolio - Home" />

      <SectionBanner>
        <div>
          <span>Olá, seja bem-vindo(a) ao meu portfólio</span>
          <h2>Me chamo André Lucas</h2>
          <p>
            Como desenvolvedor, sou apaixonado por
            aprender e compartilhar conhecimento, sempre aberto a novas conexões.
          </p>
          <Button text="Saiba mais" url="/sobre" />
        </div>
        <PhotoPerfil text="Foto de perfil do André" />
      </SectionBanner>

      <SectionPrincipal>
        <SectionProjects>
          <TextSubTitulo text="Meus Projetos" />
          <CardsProjects>
            {project
              && project.map(({ id, imagem, title, tech, repositorio, link }) => (
                <Card
                  key={id}
                  image={imagem}
                  title={title}
                  tech={tech}
                  repositorio={repositorio}
                  link={link}
                />
              ))}
          </CardsProjects>
          <Button text="Mais Projetos" url="/projetos" />
        </SectionProjects>
        <SectionArticles>
          <TextSubTitulo text="Formação Acadêmica" />
          <SectionAcademic>
            {
              cardAcademic
              && cardAcademic.map(({ id, image, title, subTitle }) => (
                <AcademicCard
                  key={id}
                  image={image}
                  title={title}
                  subTitle={subTitle}
                />
              ))
            }
          </SectionAcademic>
        </SectionArticles>
      </SectionPrincipal>

      {/* <SectionUx>
        <TextSubTitulo text="Projetos UX Design" />
        <LayoutGridUx>
          <LinkUx to="/ux/flora-express" aria-label="Flora Express">
            <div className="card-left">
              <img src={FloraExpress} alt="Logo do projeto Flora Express" />
              <h3>Flora Express</h3>
            </div>
          </LinkUx>
          <div className="card-right">
            <LinkUx to="/ux/roda-livre" aria-label="Roda Livre">
              <div className="roda-livre">
                <img src={RodaLivre} alt="Logo do projeto Roda Livre" />
                <h3>Roda Livre</h3>
              </div>
            </LinkUx>
            <LinkUx to="/ux/saude-agil" aria-label="Saúde Ágil">
              <div className="saude-agil">
                <img src={SaudeAgil} alt="Logo do projeto Saúde Ágil" />
                <h3>Saúde Ágil</h3>
              </div>
            </LinkUx>
          </div>
        </LayoutGridUx>
      </SectionUx> */}
    </HomeStyled>
  );
}

export default Home;
