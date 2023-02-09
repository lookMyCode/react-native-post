import { View, StatusBar } from 'react-native';
import Navigation from './Navigation';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';


export default function App() {
  
  return (
    <>
      <Navigation />
      {/* <StatusBar translucent={false} /> */}
    </>
  );
}
