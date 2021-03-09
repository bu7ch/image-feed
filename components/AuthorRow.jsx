import React from "react";
import { StyleSheet, Text, TouchableOpacity, View  } from "react-native";
import PropTypes from "prop-types";

import Avatar from "./Avatar"
import getAvatarColor from "../utils/getAvatarColor"
import getInitials from '../utils/getInitials'

export default function AuthorRow({ fullname, linkText, onPressLinkText }) {


  return (
    <View style={styles.container}>
      <Avatar size={35}
      initials= {getInitials(fullname)} 
      backgroundColor= {getAvatarColor(fullname)}/>
      <Text style={styles.text} numberOfLines={1}>{fullname}</Text>
      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
      )}
      </View>
  )

}
const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: 'center',
    paddingHorizontal: 10,
  }, 
  text: {
    flex: 1,
    marginHorizontal: 6
  }
})

AuthorRow.PropTypes = {
  fulname : PropTypes.string.isRequired,
  linkText : PropTypes.string.isRequired,
  onPressLinkText : PropTypes.func.isRequired,
}
