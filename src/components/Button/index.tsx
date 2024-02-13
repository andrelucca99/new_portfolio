import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkProjects = styled(Link)`
  text-decoration: none;
  list-style: none;
  background-color: transparent;
  transition: all 0.2s ease-out;
  padding: 5px 20px;
  color: ${({ theme }) => theme.textColor.primary};
  border: 1px solid ${({ theme }) => theme.textColor.segundary};
  border-radius: 5px;
  margin: 20px 0;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.bgCardTech};
  }
`;

type ButtonProps = {
  text: string;
  url: string;
};

function Button({ text, url }: ButtonProps) {
  return (
    <LinkProjects to={ url }>
      { text }
    </LinkProjects>
  );
}

export default Button;
