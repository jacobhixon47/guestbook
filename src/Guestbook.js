import React, { Component } from "react";
import Nav from './Nav';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import FlexRow from './Flex/FlexRow';
import colors from './colors';

class Guestbook extends Component {
  constructor(props) {
    // call parent constructor
    super(props);
    // set initial state
    this.state = { greeting: 'Hello' };
    // bind to instance of this component
    this.frenchify = this.frenchify.bind(this);
  }
  frenchify() {
    this.setState({ greeting: 'Bonjour'});
  }
  render() {
    return (
      <div className="Guestbook">
        <Nav>
          {/* <a href="#">GuestBook</a> */}
          <a href="#">Create Guestbook</a>
          <a href="#">Sign Guestbook</a>
        </Nav>
        <FlexRow>
          <h1>GuestBook</h1>
        </FlexRow>
        <FlexRow>
          <SignUpForm style={{flex: 4}}/>
          <SignInForm style={{flex: 4}}/>
        </FlexRow>
      </div>
    );
  }
}

export default Guestbook;
