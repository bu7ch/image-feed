import { Image, StyleSheet, View, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
 import React, { Component } from 'react';
import AuthorRow from './AuthorRow';

 
 class Card extends Component {

  // static propTypes = {
  //   fullname: PropTypes.string.isRequired,
  //   image: Image.propTypes.source.isRequired,
  //   linkText: PropTypes.string,
  //   onPressLinkText: PropTypes.func
  // };
  // static defaultProps = {
  //   linkText: '',
  //   onPressLinkText: () => {},
  // }
   render() {
     const  { fullname, image, linkText, onPressLinkText } = this.props;
     return (
       <View>
         <AuthorRow 
         fullname={fullname}
         linkText={linkText}
         onPressLinkText={onPressLinkText} 
         />
         <Image style={styles.image} source={image} />
       </View>
     );
   }
 }
 const { width } = Dimensions.get("window");
 const styles = StyleSheet.create({
   image: {
     aspectRatio:1,
     width:width,
     height: width,
     resizeMode:'cover',
     backgroundColor:'rgba(0,0,0,0.02)',
   }
 })
 
 export default Card;