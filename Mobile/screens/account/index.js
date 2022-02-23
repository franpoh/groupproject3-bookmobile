import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import AuthContext from "../../context";

const AccountScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
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

      <MyButton
        text="Logout"
        buttonAction={() => signOut()}
      />

    </View>
  )
};

export default AccountScreen;