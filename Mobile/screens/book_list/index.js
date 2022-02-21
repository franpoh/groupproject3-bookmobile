import React from "react";
import { Text, View } from "react-native";

import MyButton from "../../components/button";
import colours from "../../style_constants/colours";

import styles from "../../style_constants/style-sheet";

const BookListScreen = ({ navigation }) => (
  <View style={[ 
      styles.container,
      { backgroundColor: colours.baseGrey } 
  ]}>
    <Text>Book List</Text>

    <Text style={styles.h1Font}>This is h1 header!</Text>
    <Text style={styles.h2Font}>This is h2 subheader!</Text>
    <Text style={styles.h3Normal}>This is h3 normal!</Text>
    <Text style={styles.h3Bold}>This is h3 bold!</Text>
    <Text style={styles.textNormal}>This is text normal!</Text>
    <Text style={styles.textBold}>This is text bold!</Text>

    <Text>Placeholder Button for Book Details, to be deleted</Text>
    <MyButton
      text="Book Details"
      buttonAction={
        () => {
          navigation.navigate("Books", { screen: 'Book Details' });
        }
      }
    />

  </View>
);

export default BookListScreen;