import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Banner from '../../components/Banner';

import foto from '../../assets/images/Banner.svg';
import Card from '../../components/Card';

import project from './utils/data/projects.json';

function Projects() {
  const ProjectContent = styled.section`
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin: 55px 0;
  `;

  const ProjectsCards = styled.section`
    width: 100%;

    background-color: ${({ theme }) => theme.bgFooter};
    border-radius: 10px;
    border: 1px solid #5a4aee;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 20px;
  `;

  return (
    <ProjectContent>
      <Helmet title="Portfolio - Projetos" />

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

      <Banner text="Blog" image={ foto } />
    </ProjectContent>
  );
}

export default Projects;
