import styled from 'styled-components';

const LayoutStyle = styled.div`
  width: 100%;
  color: ${(props) => props.theme.textColor.primary};
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const SectionStyled = styled.section`
  width: 100%;

  background-color: #fff;
  color: #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  font-family: ${({ theme }) => theme.fonts.segundary};
  color: #333;
  line-height: 1.5;
`;

const MainStyled = styled.main`
  width: 80%;
  border-radius: 8px;
  padding: 10px 5px;
`;

const PapelProjetoStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  list-style: none;

  & li {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.textColor.segundary};
    & ul {
      list-style-type: circle;
      & li {
        color: #000;
        font-size: 15px;
        font-weight: 300;
      }
    }
  }
`;

const PersonagensStyled = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;

  & img {
    width: 50%;
    border: 2px solid #ccc;
    border-radius: 8px;
  }
`;

const WireframeLayoutStyled = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;

  & img {
    width: 50%;
    border-radius: 8px;
  }
`;

const LinhaStyled = styled.hr`
  margin: 20px 0;
  opacity: 0.2;
`;

const ParagrafoStyled = styled.p`
  margin-top: 10px;
`;

export {
  LayoutStyle,
  SectionStyled,
  MainStyled,
  PapelProjetoStyled,
  PersonagensStyled,
  WireframeLayoutStyled,
  LinhaStyled,
  ParagrafoStyled,
};
