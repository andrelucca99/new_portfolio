import styled from 'styled-components';

const TitleStyled = styled.h2`
  font-family: ${({ theme }) => theme.fonts.segundary};
  font-size: ${({ theme }) => theme.size.lg};
  color: ${({ theme }) => theme.textColor.segundary};
  margin-bottom: 20px;
`;

type TextProps = {
  text: string,
};

function TextSubTitulo({ text }: TextProps) {
  return (
    <TitleStyled>{ text }</TitleStyled>
  );
}

export default TextSubTitulo;
