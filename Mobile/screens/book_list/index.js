import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";

const BookListScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Book List</Text>

    <MyButton 
      text="Book Details" 
      buttonAction={ 
        () => {
          // navigation.navigate("Book Details", {screen: "Book Details"});

          Alert.alert(
            'Placeholder',
            "Jumping to book details",
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
          navigation.navigate("Review Upload", {screen: "Review Upload"});
        }
      }
    />
  </View>
);

export default BookListScreen;