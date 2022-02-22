import React, { useState } from "react";
import { Text, View, Alert, ScrollView, TouchableHighlight } from "react-native";
import { Provider as PaperP, DefaultTheme, Card, Title, Paragraph, Divider, Headline, Subheading, List } from 'react-native-paper';
const { v4: uuidv4 } = require('uuid');


import styles from "../../style_constants/style-sheet";
import MyButton from "../../components/button";
import colours from "../../style_constants/colours";
import { Colors } from "react-native/Libraries/NewAppScreen";

const UploadBookScreen = ({ navigation }) => {
  
  // const [ userUploadedBooks, updateUserUploadList ] = useState(uploadlist)

  // function CheckUpoads() {
  //   if (userUploadedBooks.length === 0) {
  //     return(
  //       <List.Item titleStyle = {{ fontSize:1 }} description = {props=> <Text>Your Upload List is empty. Upload a book below!</Text>} />
  //     )
  //   } else if (userUploadedBooks.length > 0) {
  //     return generateUploads();
  //   } else {
  //     console.log('Error displaying uploadlist');
  //   } return (
  //     <View></View>
  //   )};
  // };

  // function generateUploads() {
  //   console.log('Checking Upload Refresh: ', userUploadedBooks);

  //   return userUploadedBooks.map(
      
  //   )
  // }

return (
  <PaperP>

    <ScrollView style={styles.contentArea}>

        <List.Section>
        <List.Subheader style={styles.h3Bold}>My Uploads</List.Subheader>
        <List.Accordion
          title="Currently Uploaded Books"
          left={props => <List.Icon color={colours.primary} icon="clipboard-text-multiple-outline"/>}>
          <List.Item title="First Upload"/>
          <List.Item title="Second Upload"/>
          <List.Item title="3rd Upload"/>
          <List.Item title="4th Upload"/>

        </List.Accordion>
        
        <List.Accordion
          title="Previous Uploads"
          left={props => <List.Icon color={colours.primary} icon="clipboard-check-multiple-outline"/>}>
          <List.Item title="First prev upload"/>
          <List.Item title="Second prev Upload"/>
          <List.Item title="Third previous Upload teste testestesteststtest"/>
        </List.Accordion>
        
        <List.Accordion
          title="Upload New Book"
          left = {props => <List.Icon color={colours.primary} icon="clipboard-arrow-up-outline"/>}
        >
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
              navigation.navigate("Book Upload");
            }
          } 
        />
        </List.Accordion>
        
        

      </List.Section>

    </ScrollView>

  </PaperP>
)};

export default UploadBookScreen;