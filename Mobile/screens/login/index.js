import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import AuthContext from "../../context";

const LoginScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const { user } = React.useContext(AuthContext);

  return (
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
            signIn();
            console.log(user);
          }
        }
      />
    </View>
  )
};

export default LoginScreen;