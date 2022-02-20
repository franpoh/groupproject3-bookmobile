import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Login</Text>

    <MyButton 
      text="Login" 
      buttonAction={ 
        () => {
          Alert.alert(
            'Placeholder',
            "You have been logged in",
            [
              { text: "OK" }
            ]
          );
          navigation.navigate('Books', {screen: 'Book List'});
        }
      } 
    />
    
    <MyButton 
      text="Sign Up" 
      buttonAction={
        () => {
          navigation.navigate("Account", { screen: 'Sign Up' })
        }
      }
    />
  </View>
);

export default LoginScreen;