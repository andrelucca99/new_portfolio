import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import IconBack from '../../assets/icones/btn-voltar.svg';

const BannerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor.primary};
  font-size: ${({ theme }) => theme.size.xl};

  padding: 10px;

  & img {
    width: 100px;
    height: 100px;
  }
`;

const ContainerStyled = styled.section`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
`;

const IconeStyled = styled.img`
    position: absolute;
    left: 10%;
    cursor: pointer;
    color: #fff;
    margin-bottom: 15px;
`;

function BannerUx({ icone, nome } : { icone: string, nome: string }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <ContainerStyled>
      <IconeStyled src={ IconBack } alt="ícone de voltar" onClick={ handleGoBack } />
      <BannerStyled>
        <img src={ icone } alt={ `Icone do projeto ${nome}` } />
        <span>{nome}</span>
      </BannerStyled>
    </ContainerStyled>
  );
}

export default BannerUx;
