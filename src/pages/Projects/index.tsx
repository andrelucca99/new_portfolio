import { Helmet } from 'react-helmet';

import Card from '../../components/Card';

import project from './utils/data/projects.json';
import { ProjectContent, ProjectsCards } from './Styles';

function Projects() {
  return (
    <ProjectContent>
      <Helmet title="Portfolio - Projetos" />

      <ProjectsCards>
        {project
            && project.map(({ id, imagem, title, tech, repositorio, link }) => (
              <Card
                key={ id }
                image={ imagem }
                title={ title }
                tech={ tech }
                repositorio={ repositorio }
                link={ link }
              />
            ))}
      </ProjectsCards>
    </ProjectContent>
  );
}

export default Projects;
