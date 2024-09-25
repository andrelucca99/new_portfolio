import styled from 'styled-components';
import { devices } from '../../Theme';

const PerfilPhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 5px solid #5a4aee;
  padding: 2px;
  margin-bottom: 20px;

  @media ${devices.laptop} {
    width: 250px;
    height: 250px;
  }
`;

function PhotoPerfil({ text } : { text: string }) {
  return (
    <PerfilPhoto src="https://avatars.githubusercontent.com/u/66281231?v=4" alt={ text } />
  );
}

export default PhotoPerfil;
