import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from 'native-base';

import Menu from './Menu';

export default class MainMenu extends Component {
  render() {
    return (
      <Content>
      	<Menu name={'Profile'}/>
     	<Menu name={'Create new Memo'}/>
     	<Menu name={'Memo Lists'}/>
     	<Menu name={'Settings'}/>
      </Content>
    );
  }
}