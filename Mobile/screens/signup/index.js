import React from "react";
import { Text, View, Alert } from "react-native";
import { Surface, TextInput } from 'react-native-paper';

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import colours from "../../style_constants/colours";
import AuthContext from "../../context";

const SignUpScreen = () => {
  const { signUp } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <View style={[styles.containerStart, styles.alignCentre]}>
      <Text style={styles.h1Font}>Sign Up</Text>
      <TextInput
        style={[styles.textBox, styles.textNormal]}
        underlineColor={colours.baseDark}
        activeUnderlineColor={colours.primary}
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={[styles.textBox, styles.textNormal]}
        underlineColor={colours.baseDark}
        activeUnderlineColor={colours.primary}
        label="Password"
        value={pass}
        secureTextEntry={true}
        onChangeText={text => setPass(text)}
      />

      <MyButton
        text="Sign Up"
        propStyle={{ marginTop: 20 }}
        buttonAction={
          () => {
            Alert.alert(
              'Sign Up',
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