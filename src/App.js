import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import MainMenu from './component/MainMenu';

export default class App extends Component {
  render() {
    return (
	    <Container>
	        <Header>
	          <Body>
	            <Title>Memo</Title>
	          </Body>
	        </Header>
	        <MainMenu/>
	 

	    </Container>     
    );
  }
}
