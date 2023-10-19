// LoginScreen.js
import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Animated, Easing } from 'react-native';

const LoginScreen = ({navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [animation] = useState(new Animated.Value(0));
  // const [loading, setLoading] = useState(false); // Loading indicator state

  // const handleLogin = () => {
  //   // Simulate a login process
  //   // setLoading(true); // Show the loading indicator
  //   // setTimeout(() => {
  //     navigation.navigate('DashBoard');
  //     setLoading(false); // Hide the loading indicator after successful login
  //   }, 2000); // Simulate a 2-second login process
  // };

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, we'll just log the email and navigate to the dashboard
    navigation.navigate('Dashboard');
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <Text style={styles.heading}>Welcome to Medigive App</Text>
      <Text style={styles.subHeading}>Guardians of your wellness, from anywhere to everywhere</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
    <Button title="Login" onPress={handleLogin} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'lightblue', // Background color
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold', // Make text bold
    fontFamily: 'Arial',
  },
  subHeading: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold', // Make text bold
    fontFamily: 'Arial',
  },
  input: {
    width: '80%',
    marginBottom: 12,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  // loadingIndicator: {
  //   marginTop: 10,
  // },
});

export default LoginScreen;