import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";

const SignUpScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Sign Up</Text>
    
    <MyButton 
      text="Submit" 
      buttonAction={ 
        () => {
          Alert.alert(
            'Placeholder',
            "Sign Up Successful",
            [
              { text: "OK" }
            ]
          );
          navigation.navigate('Account', { screen: 'AccountPage'});
        }
      }
    />

  </View>
);

export default SignUpScreen;