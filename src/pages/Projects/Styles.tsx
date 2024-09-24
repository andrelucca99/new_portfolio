import styled from 'styled-components';
import { devices } from '../../Theme';

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

  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;

  @media ${devices.mobile} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
    column-gap: 5px;
    margin: 20px;
  }

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 2fr);
    row-gap: 20px;
    column-gap: 10px;
  }

  @media ${devices.laptop} {
    padding: 20px;
    grid-template-columns: repeat(3, 2fr);
    row-gap: 20px;
    column-gap: 10px;
  }
`;

export { ProjectContent, ProjectsCards };
