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
    </ProjectContent>
  );
}

export default Projects;
