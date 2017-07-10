import React, { Component } from 'react';
import Input from './Components/Input';
import Button from './Components/Button';
import FlexRow from './Flex/FlexRow';

class SignUpForm extends Component {
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
          <Input type="password" placeholder="Confirm Password"/>
        </FlexRow>
        <FlexRow>
          <Button primary>Sign Up</Button>
        </FlexRow>
      </div>
    );
  }
}

export default SignUpForm;
