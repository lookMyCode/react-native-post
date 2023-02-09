import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Posts'}}></Stack.Screen>
      <Stack.Screen name="Post" component={PostScreen} options={{title: 'Post'}}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
}
