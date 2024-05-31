import TextSubTitulo from '../Title';
import BannerUx from '../Banner/BannerUx';
import {
  SectionStyled,
  MainStyled,
  PapelProjetoStyled,
  PersonagensStyled,
  WireframeLayoutStyled,
  LinhaStyled,
  ParagrafoStyled,
} from './Styles';

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
  personas2?: string;
};

function LayoutUx(
  // eslint-disable-next-line react/require-default-props
  { logo, nome, projeto, wireframes, mockups, personas1, personas2 } : Props,
) {
  return (
    <SectionStyled>
      <BannerUx icone={ logo } nome={ nome } />
      { projeto ? (
        <MainStyled>
          <div>
            <TextSubTitulo text="Objetivo do projeto" />
            <p>{ projeto.map((dado) => dado.objetivo) }</p>
          </div>

          <LinhaStyled />

          <div>
            <TextSubTitulo text="Papel como designer do projeto" />
            <PapelProjetoStyled>
              <li>
                Minhas Funções:
                <ul>
                  { projeto.map(((dado) => dado.funcoes.map((item) => (
                    <li key={ item }>{item}</li>
                  )))) }
                </ul>
              </li>
              <li>
                Responsabilidades:
                <ul>
                  { projeto.map(((dado) => dado.responsabilidades.map((item) => (
                    <li key={ item }>{item}</li>
                  )))) }
                </ul>
              </li>
            </PapelProjetoStyled>
          </div>

          <LinhaStyled />

          <div>
            <TextSubTitulo text="Público-alvo" />
            <p>{ projeto.map((dado) => dado.publicoAlvo) }</p>
          </div>

          <LinhaStyled />

          <div>
            <TextSubTitulo text="Principais desafios ou restrições" />
            <ul>
              { projeto.map(((dado) => dado.desafios.map((item) => (
                <li key={ item }>{item}</li>
              )))) }
            </ul>
            <ParagrafoStyled>
              { projeto.map((dado) => dado.desafiosDescricao) }
            </ParagrafoStyled>
          </div>

          <LinhaStyled />

          <div>
            <TextSubTitulo text="Detalhes do estudo de pesquisa" />
            <p>{ projeto.map((dado) => dado.detalhes) }</p>
          </div>

          <LinhaStyled />

          <div>
            <TextSubTitulo text="Conceitos iniciais de design" />
            <ul>
              { projeto.map(((dado) => dado.conceitos.map((item) => (
                <li key={ item }>{item}</li>
              )))) }
            </ul>
          </div>

          <LinhaStyled />

          <div>
            <TextSubTitulo text="Personagens" />
            <PersonagensStyled>
              <img src={ personas1 } alt="Ilustração de um personagem" />
              {
                personas2 ? (
                  <img src={ personas2 } alt="Ilustração de um personagem" />
                ) : (null)
              }
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
            <p>{ projeto.map((dado) => dado.descricaoTeste) }</p>
          </div>

          <LinhaStyled />

          <div>
            <TextSubTitulo text="Conclusão" />
            <p>{ projeto.map((dado) => dado.conclusao) }</p>

            <LinhaStyled />

            <TextSubTitulo text="Próximas Etapas" />

            <ul>
              { projeto.map(((dado) => dado.proximasEtapas.map((item) => (
                <li key={ item }>{item}</li>
              )))) }
            </ul>
            <ParagrafoStyled>
              { projeto.map((dado) => dado.descricaoEtapas) }
            </ParagrafoStyled>
          </div>
        </MainStyled>
      ) : (
        <p>Os dados não estão disponíveis.</p>
      )}
    </SectionStyled>
  );
}

export default LayoutUx;
