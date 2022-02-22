import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import AuthContext from "../../context";

const SignUpScreen = ({ navigation }) => {
  const { signUp } = React.useContext(AuthContext);

  return (
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
            signUp();
          }
        }
      />

    </View>
  )
};

export default SignUpScreen;