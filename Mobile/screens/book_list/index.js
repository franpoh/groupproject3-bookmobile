import React from "react";
import { Text, View, Alert, ScrollView } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import colours from "../../style_constants/colours";
import GetBooks from "./getBooks";
import BookSearch from "./components/book_search";

const BookListScreen = ({ navigation }) => (
  <ScrollView>
    <View>
      {/* <Text style={styles.h1Font}>Welcome to Book Loop!</Text> */}
      <BookSearch />
    </View>
    <View style={{ backgroundColor: colours.baseWhite }}>
      <Text style={styles.h2Font}>Featured</Text>
      <GetBooks />
    </View>
    <View style={styles.container}>
      <Text>Book List</Text>

      <MyButton
        text="Book Details"
        buttonAction={
          () => {
            navigation.navigate("Book Upload", { screen: "Book Details" });

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

      {/* <MyButton
        text="Reviews upload"
        buttonAction={
          () => {
            navigation.navigate("Review Upload", { screen: "Review Upload" });
          }
        }
      /> */}
    </View>
  </ScrollView>

);

export default BookListScreen;