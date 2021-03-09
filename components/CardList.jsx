import { FlatList } from 'react-native';
import { getImagesFromId } from '../utils/api'

import React, { Component } from 'react';
import Card from './Card';

const keyExtractor = ({id}) => id.toString();

class CardList extends Component {
  renderItem = ({item : {id, author}}) =>{
const { commentsForItem, onPressComments } = this.props;
const comments = commentsForItem[id];
return (
    <Card
    fullname= {author}
    image={{ uri: getImagesFromId(id)}} 
    linkText={ `${comments ? comments.length : 0} Commentaires`}
    onPressLinkText={() => onPressComments(id)}
    />
)
  }
    render() {
    const { items, commentsForItem } = this.props;
    return (
     <FlatList data= {items}
     renderItem = {this.renderItem}
     keyExtractor= {keyExtractor}
     extraData={ commentsForItem }
     />
    );
  }
}

export default CardList;