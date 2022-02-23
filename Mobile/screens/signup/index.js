import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import { Surface, TextInput } from 'react-native-paper';

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import colours from "../../style_constants/colours";
import AuthContext from "../../context";

const SignUpScreen = ({ navigation }) => {
  const { signUp } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <View style={styles.container}>
      <Surface style={styleo.surface}>
        <TextInput
          style={styleo.textBox}
          underlineColor={colours.baseDark}
          activeUnderlineColor={colours.primary}
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styleo.textBox}
          underlineColor={colours.baseDark}
          activeUnderlineColor={colours.primary}
          label="Password"
          value={pass}
          secureTextEntry={true}
          onChangeText={text => setPass(text)}
        />

        <MyButton
          text="Sign Up"
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
      </Surface>
    </View>
  )
};

const styleo = StyleSheet.create({
  surface: {
    padding: 8,
    height: 300,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  textBox: {
    height: 50,
    width: 300,
  }
});

export default SignUpScreen;