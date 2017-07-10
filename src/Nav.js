import styled from 'styled-components';
import colors from './colors';

const Nav = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 50px;
  max-height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.blue};
  border-bottom: 1px solid ${colors.blue};
  a {
    width: 100%;
    text-align: center;
    flex-grow: 4;
    color: white;
    text-decoration: none;
  }
`


export default Nav;
