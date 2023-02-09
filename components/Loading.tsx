import { View, StyleSheet, ActivityIndicator, Text } from "react-native";


export default function Loading() {
  return <View style={styles.loader}>
      <ActivityIndicator size='large'></ActivityIndicator>
      <Text style={styles.loader_text}>Loading...</Text>
    </View>
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader_text: {
    marginTop: 15,
  },
});
