import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';


export default class Menu extends Component {


  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Content>
          <Button>
            <Text>{this.props.name}</Text>
          </Button>
        </Content>
    );
  }
}