import React from "react";
import { Text, View, Alert, Image } from "react-native";

import MyButton from "../../components/button";
import colours from "../../style_constants/colours";
import styles from "../../style_constants/style-sheet";
import { userA, indexBooks, swap, reviews } from '../../components/test-data';

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