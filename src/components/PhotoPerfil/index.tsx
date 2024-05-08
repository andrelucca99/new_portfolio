import styled from 'styled-components';

const PerfilPhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 5px solid #5a4aee;
  padding: 2px;
  margin-bottom: 20px;
`;

function PhotoPerfil({ image, text } : { image: string, text: string }) {
  return (
    <PerfilPhoto src={ image } alt={ text } />
  );
}

export default PhotoPerfil;
