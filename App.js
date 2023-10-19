// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './src/components/LoginScreen';
// import DashBoard from './src/components/DashBoard';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// // App.js
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Dashboard" component={DashBoard} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/LoginScreen';
import DashBoard from './src/components/DashBoard';
import Medicine from './src/components/Medicine';
import FeedBack from './src/components/FeedBack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashBoard} />
        <Stack.Screen name="Medicine" component={Medicine} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;






