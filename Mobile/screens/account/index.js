import React from "react";
import { Text, View, Alert } from "react-native";
import { TextInput, Avatar } from 'react-native-paper';

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import colours from "../../style_constants/colours";
import AuthContext from "../../context";
import { userA } from "../../components/test-data";

const AccountScreen = () => {
  const [email, setEmail] = React.useState(userA.email);
  const [pass, setPass] = React.useState(userA.password);

  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={[styles.containerStart, styles.alignCentre]}>
      <Text style={styles.h1Font}>My Account</Text>
      <View style={styles.containerAlt}>
        <Avatar.Image
          size={100}
          source={userA.userImage}
          style={{ marginRight: 20 }}
        />
        <View>
          <Text style={styles.h3Bold}>{userA.username}</Text>
          <Text style={styles.textNormal}>{userA.points} Points</Text>
        </View>
      </View>
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
        text="Save Profile"
        propStyle={{ marginTop: 20 }}
        buttonAction={
          () => {
            Alert.alert(
              'Edit Profile',
              "Profile has been saved",
              [
                { text: "OK" }
              ]
            );
          }
        }
      />

      <MyButton
        text="Logout"
        propStyle={{ marginTop: 20 }}
        buttonAction={
          () => {
            Alert.alert(
              'Sign Out',
              "You have been signed out of your account",
              [
                { text: "OK" }
              ]
            );
            signOut()
          }
        }
      />

    </View>
  )
};

export default AccountScreen;