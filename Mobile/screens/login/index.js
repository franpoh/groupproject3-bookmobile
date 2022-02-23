import React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { Surface, TextInput } from 'react-native-paper';

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import colours from "../../style_constants/colours";
import AuthContext from "../../context";

const LoginScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
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

export default LoginScreen;