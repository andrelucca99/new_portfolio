import styled from 'styled-components';
import { devices } from '../../Theme';

const PerfilPhoto = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  border: 5px solid #5a4aee;
  padding: 2px;
  margin-bottom: 20px;

  @media ${devices.mobile} {
    width: 150px;
    height: 150px;
  }
`;

function PhotoPerfil({ image, text } : { image: string, text: string }) {
  return (
    <PerfilPhoto src={ image } alt={ text } />
  );
}

export default PhotoPerfil;
