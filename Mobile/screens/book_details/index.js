import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import AuthContext from "../../context";

const BookDetailsScreen = ({ navigation }) => {
  const { user } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Book Details</Text>
      {/* https://www.youtube.com/watch?v=5NewXsBnoKw&t=473s */}
      <MyButton
        text="Add to Wishlist"
        buttonAction={
          () => {
            if (user === null) {
              Alert.alert(
                'Login',
                "Please login or sign up first!",
                [
                  { text: "OK" }
                ]
              );
              navigation.navigate('Login')
            } else {
              Alert.alert(
                'Wishlist',
                "Book has been added to Wishlist",
                [
                  { text: "OK" }
                ]
              )
            }
          }
        }
      />

      <MyButton
        text="Buy"
        buttonAction={
          () => {
            if (user === null) {
              Alert.alert(
                'Login',
                "Please login or sign up first!",
                [
                  { text: "OK" }
                ]
              );
              navigation.navigate('Login')
            } else {
              Alert.alert(
                'Purchase',
                "Book has been purchased",
                [
                  { text: "OK" }
                ]
              )
            }
          }
        }
      />

      <MyButton
        text="Upload Review"
        buttonAction={
          () => {
            if (user === null) {
              Alert.alert(
                'Login',
                "Please login or sign up first!",
                [
                  { text: "OK" }
                ]
              );
              navigation.navigate('Login')
            } else {
              navigation.navigate("Book Upload", { screen: "Upload Review" });
            }
          }
        }
      />
    </View>
  )
}

export default BookDetailsScreen;