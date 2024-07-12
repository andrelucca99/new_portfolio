import styled from 'styled-components';

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

  /* background-color: ${({ theme }) => theme.bgFooter}; */
  border-radius: 10px;
  border: 1px solid #5a4aee;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 20px;
`;

export { ProjectContent, ProjectsCards };
