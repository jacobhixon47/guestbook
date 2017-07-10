import styled from 'styled-components';
import colors from './../colors';

const Input = styled.input`
  border-radius: 3px;
  padding: 1em 1.25em;
  margin: 0 1px;
  background: transparent;
  color: ${colors.blue};
  border: 2px solid ${colors.blue};
  flex-grow: 1;
`;


export default Input;
