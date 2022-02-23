import React from "react";
import { Text, View, Alert, ScrollView } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import colours from "../../style_constants/colours";
import GetBooks from "./getBooks";
import BookSearch from "./components/book_search";

const BookListScreen = () => (
  <View style={{ backgroundColor: colours.baseWhite }}>
    <BookSearch />
  </View>
);

export default BookListScreen;