import styled from 'styled-components';

const BannerStyled = styled.section`
  width: 80%;
  height: 300px;

  border-radius: 20px;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageStyled = styled.img`
  max-width: 100%;
  z-index: 0;
`;

function Banner({ image } : { image: string }) {
  return (
    <BannerStyled>
      <ImageStyled src={ image } alt="banner" />
    </BannerStyled>
  );
}

export default Banner;
