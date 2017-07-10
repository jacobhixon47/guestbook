import styled from 'styled-components';
import colors from './../colors';

const Button = styled.button`
  border-radius: 3px;
  padding: 1em 1.25em;
  margin: 0 1px;
  background: ${props => props.primary ? colors.blue : 'white'};
  color: ${props => props.primary ? 'white' : colors.blue };
  border: 2px solid ${colors.blue};
  flex-grow: 1;
  &:hover {
    cursor: pointer;
    background: ${props => props.primary ? 'white' : colors.blue };
    color: ${props => props.primary ? colors.blue : 'white'};
  }
`

export default Button;
