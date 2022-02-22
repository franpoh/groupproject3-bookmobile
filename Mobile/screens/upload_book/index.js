import React, { useState } from "react";
import { Text, View, Alert, ScrollView, TouchableHighlight } from "react-native";
import { Provider as PaperP, DefaultTheme, Card, Title, Paragraph, Divider, Headline, Subheading, List } from 'react-native-paper';
const { v4: uuidv4 } = require('uuid');


import styles from "../../style_constants/style-sheet";
import MyButton from "../../components/button";
import colours from "../../style_constants/colours";
import { userB, indexBooks, swap } from '../../components/test-data';

const UploadBookScreen = ( { navigation } ) => {
  
  const [ userUploadedBooks, updateUserUploadList ] = useState(userB.uploadlist);
  const SwapList = swap;
  const userId = userB.userId;
  const filtered = swap.filter(data => (data.userId == userId))

  function test() {
    // console.log(userB); //returns user info succeesfully
    // console.log(swap); //returns swap list successfully
    // console.log(userId); //returns 4 successfully
    console.log("checking filtered", filtered);
    return console.log("Test Function Ran");
  }

// IF BANNED, show ban message, divert the user back to main page
// If admin/user show screen, else show user does not exist, divert to registration.
  // if (userB.type == 'ADMIN' || 'USER') {
    
  // }

  // function CheckUploads() {
  //   if (userUploadedBooks.length === 0) {
  //     return(
  //       <List.Item titleStyle = { styles.textNormal } description = {props=> <Text>Your Upload List is empty. Upload a book below!</Text>} />
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
              test();
            }
          } 
        />
        </List.Accordion>
        
        

      </List.Section>

    </ScrollView>

  </PaperP>
)};

export default UploadBookScreen;