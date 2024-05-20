/* eslint-disable react/jsx-max-depth */
import styled from 'styled-components';
import TextSubTitulo from '../Title';
import BannerUx from '../Banner/BannerUx';

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
    border: 2px solid #000;
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

interface IProject {
  objetivo: string;
  funcoes: string[];
  responsabilidades: string[];
  publicoAlvo: string;
  desafios: string[];
  desafiosDescricao: string;
  detalhes: string;
  conceitos: string[];
  descricaoTeste: string;
  conclusao: string;
  proximasEtapas: string[];
  descricaoEtapas: string;
}

type Props = {
  logo: string,
  nome: string,
  projeto: IProject[],
  wireframes: string,
  mockups: string,
  personas1: string,
  personas2?: string | undefined;
};

function LayoutUx(
  { logo, nome, projeto, wireframes, mockups, personas1, personas2 } : Props,
) {
  return (
    <SectionStyled>
      <BannerUx icone={ logo } nome={ nome } />

      <MainStyled>
        <div>
          <TextSubTitulo text="Objetivo do projeto" />

          <p>{projeto && projeto.map((dado) => dado.objetivo) }</p>
        </div>

        <LinhaStyled />

        <div>
          <TextSubTitulo text="Papel como designer do projeto" />
          <PapelProjetoStyled>
            <li>
              Minhas Funções:
              <ul>
                {projeto && projeto.map(((dado) => dado.funcoes.map((item) => (
                  <li key={ item }>{item}</li>
                ))))}
              </ul>
            </li>
            <li>
              Responsabilidades:
              <ul>
                {projeto && projeto.map(((dado) => dado.responsabilidades.map((item) => (
                  <li key={ item }>{item}</li>
                ))))}
              </ul>
            </li>
          </PapelProjetoStyled>
        </div>

        <LinhaStyled />

        <div>
          <TextSubTitulo text="Público-alvo" />
          <p>{ projeto && projeto.map((dado) => dado.publicoAlvo) }</p>
        </div>

        <LinhaStyled />

        <div>
          <TextSubTitulo text="Principais desafios ou restrições" />
          <ul>
            {projeto && projeto.map(((dado) => dado.desafios.map((item) => (
              <li key={ item }>{item}</li>
            ))))}
          </ul>
          <ParagrafoStyled>
            { projeto && projeto.map((dado) => dado.desafiosDescricao) }
          </ParagrafoStyled>
        </div>

        <LinhaStyled />

        <div>
          <TextSubTitulo text="Detalhes do estudo de pesquisa" />
          <p>{ projeto && projeto.map((dado) => dado.detalhes) }</p>
        </div>

        <LinhaStyled />

        <div>
          <TextSubTitulo text="Conceitos iniciais de design" />
          <ul>
            {projeto && projeto.map(((dado) => dado.conceitos.map((item) => (
              <li key={ item }>{item}</li>
            ))))}
          </ul>
        </div>

        <LinhaStyled />

        <div>
          <TextSubTitulo text="Personagens" />
          <PersonagensStyled>
            <img src={ personas1 } alt="Ilustração de um personagem" />
            <img src={ personas2 } alt="Ilustração de um personagem" />
          </PersonagensStyled>
        </div>

        <LinhaStyled />

        <div>
          <TextSubTitulo text="Wireframes / Protótipos de alta fidelidade" />
          <WireframeLayoutStyled>
            <img src={ wireframes } alt="" />
            <img src={ mockups } alt="" />
          </WireframeLayoutStyled>
        </div>

        <LinhaStyled />

        <div>
          <TextSubTitulo text="Resultados dos testes com usuários" />
          <p>{ projeto && projeto.map((dado) => dado.descricaoTeste) }</p>
        </div>

        <LinhaStyled />

        <div>
          <TextSubTitulo text="Conclusão" />
          <p>{ projeto && projeto.map((dado) => dado.conclusao) }</p>

          <LinhaStyled />

          <TextSubTitulo text="Próximas Etapas" />

          <ul>
            {projeto && projeto.map(((dado) => dado.proximasEtapas.map((item) => (
              <li key={ item }>{item}</li>
            ))))}
          </ul>
          <ParagrafoStyled>
            { projeto && projeto.map((dado) => dado.descricaoEtapas) }
          </ParagrafoStyled>

        </div>
      </MainStyled>

    </SectionStyled>
  );
}

export default LayoutUx;
