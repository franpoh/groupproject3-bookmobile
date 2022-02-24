import React from "react";
import { Text, View, Alert, Image } from "react-native";

import MyButton from "../../components/button";
import colours from "../../style_constants/colours";
import styles from "../../style_constants/style-sheet";
import { userA, indexBooks, swap, reviews } from '../../components/test-data';

const books = indexBooks.reduce(function (p, c) {
  p[c.indexId] = c;
  return p;
}, {});

const mergedBooksandReviews = reviews.map(function (c) {
  const d = books[c.indexId];
  return {
    indexId: c.indexId,
    review: c.review,
    userId: c.userId,
    title: d.title,
    author: d.author
  }
});

const image = require("../../assets/splash.png");

const UploadReviewScreen = ({ navigation }) => (
  <View style={styles.container} >

    <Text>UploadReview</Text>

    <MyButton
      text="Upload Review"
      buttonAction={
        () => {
          Alert.alert(
            'Placeholder',
            "Review has been Uploaded",
            [
              { text: "OK" }
            ]
          );
          navigation.navigate("Book List");
        }
      }
    />

  </View>
);

export default UploadReviewScreen;