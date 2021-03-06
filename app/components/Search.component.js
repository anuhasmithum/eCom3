import React, { Component } from 'react';
import {Body, Container, Header, Icon, Input, Text, Item, Button} from "native-base";


export default class Search extends Component{
    render(){
    return(
      <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          {/* <Icon name="ios-people" /> */}
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    </Container>
    )
  }
}
