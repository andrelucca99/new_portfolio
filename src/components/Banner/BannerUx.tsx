import styled from 'styled-components';

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
function BannerUx({ icone, nome } : { icone: string, nome: string }) {
  return (
    <BannerStyled>
      <img src={ icone } alt={ `Icone do projeto ${nome}` } />
      <span>{nome}</span>
    </BannerStyled>
  );
}

export default BannerUx;
