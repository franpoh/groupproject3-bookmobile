import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";

const BookDetailsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Book Details</Text>

    <MyButton 
      text="Add to Wishlist" 
      buttonAction={ 
        () => {
          Alert.alert(
            'Placeholder',
            "Book has been added to Wishlist",
            [
              { text: "OK" }
            ]
          )
        }
      } 
    />

    <MyButton 
      text="Buy" 
      buttonAction={
        () => {
          Alert.alert(
            'Placeholder',
            "Book has been purchased",
            [
              { text: "OK" }
            ]
          )
        }
      } 
    />

    <MyButton 
      text="Upload Review" 
      buttonAction={
        () => {
          navigation.navigate("Books", { screen: 'Upload Review' });
        }
      }
    />
  </View>
);

export default BookDetailsScreen;