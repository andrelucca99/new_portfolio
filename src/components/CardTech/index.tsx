import styled from 'styled-components';

const CardContainer = styled.section`
  width: 150px;
  height: 100px;
  background-color: ${({ theme }) => theme.bgCardTech};
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 0px 0px rgba(86,107,134,1);
  -moz-box-shadow: 0px 10px 0px 0px rgba(86,107,134,1);
  box-shadow: 0px 7px 0px 0px rgba(86,107,134,1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  & img {
    max-width: 100%;
  }

  & span {
    color: ${({ theme }) => theme.textColor.segundary};
    font-size: ${({ theme }) => theme.size.sm};
    font-weight: ${({ theme }) => theme.weight.medium};
  }
`;

type CardTechProps = {
  image: string,
  title: string
};

function CardTech({ image, title }: CardTechProps) {
  return (
    <CardContainer>
      <img src={ image } alt={ title } />
      <span>{ title }</span>
    </CardContainer>
  );
}

export default CardTech;
