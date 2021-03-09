import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NavigationBar({ title, leftText, onPressLeftText}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftText} onPress={onPressLeftText}>
        <Text>{leftText}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height:40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight:'500',
  },
  leftText: {
    position: 'absolute',
    left:20,
    top:0,
    bottom:0,
    justifyContent: 'center'
  }
})