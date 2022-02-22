import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";

import styles from "../../style_constants/style-sheet";

const UploadReviewScreen = ({ navigation }) => (
  <View style={styles.container}>
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