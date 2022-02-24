import React from "react";
import { Text, View, Alert, ScrollView } from "react-native";
import styles from "../../style_constants/style-sheet";
import colours from "../../style_constants/colours";
import BookSearch from "./book_search";
import { SafeAreaView } from "react-native-safe-area-context";

const BookListScreen = ({route, navigation}) => {
    
  return (
  <SafeAreaView>
    <View style={{ backgroundColor: colours.baseWhite }}>
      <BookSearch />
    </View>
  </SafeAreaView>

)};

export default BookListScreen;