import React from "react";
import { Text, View, Alert } from "react-native";

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";

const UploadBookScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Upload Book</Text>
    <MyButton
      text="Upload Book"

      buttonAction={ 
        () => {
          Alert.alert(
            'Placeholder',
            "Book has been Uploaded",
            [
              { text: "OK" }
            ]
          );
          navigation.navigate('Books', {screen: 'Book List'});
        }
      } 
    />
    
  </View>
);

export default UploadBookScreen;