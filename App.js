import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Feed from "./components/screens/Feed";
import Comments from "./components/screens/Comments";


const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

export default class App extends Component {
  state = {
    commentsForItem: {},
    showModal: false,
    selectedItemId: null,
  };

  async componentDidMount() {
    try {
      const commentsForItem = await AsyncStorage.getItem(
        ASYNC_STORAGE_COMMENTS_KEY,
      );

      this.setState({
        commentsForItem: commentsForItem ? JSON.parse(commentsForItem) : {},
      });
    } catch (e) {
      console.log('Failed to load comments');
    }
  }

  onSubmitComment = text => {
    const { selectedItemId, commentsForItem } = this.state;
    const comments = commentsForItem[selectedItemId] || [];

    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    };

    this.setState({ commentsForItem: updated });

    try {
      AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.log('Failed to save comment', text, 'for', selectedItemId);
    }
  };

  openCommentScreen = id => {
    this.setState({
      showModal: true,
      selectedItemId: id,
    });
  };

  closeCommentScreen = () => {
    this.setState({
      showModal: false,
      selectedItemId: null,
    });
  };

  render() {
    const { commentsForItem, showModal, selectedItemId } = this.state;

    return (
      <View style={styles.container}>
        <Feed
          style={styles.feed}
          commentsForItem={commentsForItem}
          onPressComments={this.openCommentScreen}
        />
        <Modal
          visible={showModal}
          animationType="slide"
          onRequestClose={this.closeCommentScreen}
        >
          <Comments
            style={styles.comments}
            comments={commentsForItem[selectedItemId] || []}
            onClose={this.closeCommentScreen}
            onSubmitComment={this.onSubmitComment}
          />
        </Modal>
        <StatusBar style="light" translucent={false} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  feed: {
    flex: 1,
  },
  comments: {
    flex: 1,
  },
});
