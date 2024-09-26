import styled from 'styled-components';
import { devices } from '../../Theme';
import { IAcademicCard } from '../../pages/About/utils/Interfaces';

const Card = styled.section`
  width: 500px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #566B86;
  background-color: #04244F;

  display: flex;
  align-items: flex-start;
  gap: 10px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }

  & section {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${devices.mobile} {
      align-items: center;
    }

    @media ${devices.tablet} {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media ${devices.mobile} {
    flex-direction: column;
    align-items: center;
  }

  @media ${devices.tablet} {
      flex-direction: row;
    }
`;

function AcademicCard({ image, title, subTitle, data } : IAcademicCard) {
  return (
    <Card>
      <img src={ image } alt="Foto da instituição" />
      <section>
        <h3>{title }</h3>
        <span>{ subTitle }</span>
        <span>{ data }</span>
      </section>
    </Card>
  );
}

export default AcademicCard;
