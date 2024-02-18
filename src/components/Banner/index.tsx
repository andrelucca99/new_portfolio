import styled from 'styled-components';
import { BannerProps } from '../../utils/types';

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

const TitleStyled = styled.h1`
  max-width: 350px;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.segundary};
  font-size: ${({ theme }) => theme.size.xl};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.textColor.primary};

  position: absolute;
  z-index: 1;
`;

const ImageStyled = styled.img`
  max-width: 100%;
  z-index: 0;
`;

function Banner({ text, image }: BannerProps) {
  return (
    <BannerStyled>
      <TitleStyled>{text}</TitleStyled>
      <ImageStyled src={ image } alt="banner" />
    </BannerStyled>
  );
}

export default Banner;
