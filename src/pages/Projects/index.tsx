import styled from 'styled-components';
import Banner from '../../components/Banner';

import foto from '../../assets/images/Banner.svg';
import TextSubTitulo from '../../components/Title';
import Card from '../../components/Card';

import project from './utils/data/projects.json';

function Projects() {
  const ProjectContent = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;

    /* background-color: red; */
    margin: 55px 0;
    padding-left: 20px;
  `;

  const ProjectsCards = styled.section`
    width: 100%;
    /* background-color: yellow; */

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    padding: 20px;
  `;

  return (
    <ProjectContent>
      <Banner text="Projetos" image={ foto } />
      <TextSubTitulo text="Projetos" />

      <ProjectsCards>
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
      </ProjectsCards>

      <Banner text="Projetos" image={ foto } />
    </ProjectContent>
  );
}

export default Projects;
