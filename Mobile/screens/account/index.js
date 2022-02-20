import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";

const AccountScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Account</Text>

    <MyButton 
      text="Save Profile" 
      buttonAction={ 
        () => {
          Alert.alert(
            'Placeholder',
            "Profile has been saved",
            [
              { text: "OK" }
            ]
          );
        }
      } 
    />

    <Text>Placeholder Button for Login, to be deleted</Text>
    <MyButton
      text="Login"
      buttonAction={
        () => {
          navigation.navigate("Account", { screen: 'Login' });
        }
      }
    />

  </View>
);

export default AccountScreen;