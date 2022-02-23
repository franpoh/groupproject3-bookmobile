import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";

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

const UploadReviewScreen = ({ navigation }) => (
  <View style={styles.container}>

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