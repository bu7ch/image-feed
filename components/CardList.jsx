import { FlatList } from 'react-native';
import { getImagesFromId } from '../utils/api'

import React, { Component } from 'react';
import Card from './Card';

const keyExtractor = ({id}) => id.toString();

class CardList extends Component {
  renderItem = ({item : {id, author}}) =>(
    <Card
    fullname= {author}
    image={{ uri: getImagesFromId(id)}} />
    )
    render() {
    const { items } = this.props;
    return (
     <FlatList data= {items}
     renderItem = {this.renderItem}
     keyExtractor= {keyExtractor}
     />
    );
  }
}

export default CardList;