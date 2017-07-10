import styled from 'styled-components';

const Nav = styled.div`
  width: 100%;
  max-width: 100%;
  height: 5vh;
  max-height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid palevioletred;
  border-radius: 3px;
  a {
    width: 100%;
    text-align: center;
    flex-grow: 1;
    color: palevioletred;
    text-decoration: none;
  }
`


export default Nav;
