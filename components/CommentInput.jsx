import { StyleSheet, TextInput, View } from 'react-native';
import React, { Component } from 'react';

class CommentInput extends Component {
  state = { 
    text: ''
  }
  handleChangeText = text => {
    this.setState({ text })
  }
  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;
    if (!text) return;
    onSubmit(text);
    this.setState({ text: ''});
  }
  render() {
    const { placeholder } = this.props;
    const { text } = this.state;
    return (
      <View style={ styles.container}>
        <TextInput 
        style = {styles.input}
        value= {text}
        underlineColorAndroid = 'transparent'
        onChangeText={ this.handleChangeText}
        onSubmitEditing = {this.handleSubmitEditing}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height:60,
  },
  input: {
    flex:1,
  }
})

export default CommentInput;
