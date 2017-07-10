import React, { Component } from 'react';
import Input from './Components/Input';
import Button from './Components/Button';
import FlexRow from './Flex/FlexRow';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{width: '40vw'}}>
        <FlexRow>
          <Input type="email" placeholder="Email"/>
        </FlexRow>
        <FlexRow>
          <Input type="password" placeholder="Password"/>
        </FlexRow>
        <FlexRow>
          <Button primary>Sign In</Button>
        </FlexRow>
      </div>
    );
  }
}

export default SignInForm;
