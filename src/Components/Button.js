import styled from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 1em 1.25em;
  margin: 0 1px;
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  border: 2px solid palevioletred;
  flex-grow: 1;
  &:hover {
    cursor: pointer;
    background: ${props => props.primary ? 'white' : 'palevioletred'};
    color: ${props => props.primary ? 'palevioletred' : 'white'};
  }
`

export default Button;
