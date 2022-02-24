import React from "react";
import { View, Text, Alert } from "react-native";
import { TextInput, Checkbox } from 'react-native-paper';

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import colours from "../../style_constants/colours";
import AuthContext from "../../context";

const LoginScreen = () => {
  const { signIn } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={[styles.containerStart, styles.alignCentre]}>
      <Text style={styles.h1Font}>Login</Text>
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

      <Checkbox.Item
        label="Remember Me"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        color={colours.primary}
      />

      <MyButton
        text="Login"
        buttonAction={
          () => {
            Alert.alert(
              'Login',
              "You have been logged in",
              [
                { text: "OK" }
              ]
            );
            signIn();
          }
        }
      />
    </View>
  )
};

export default LoginScreen;