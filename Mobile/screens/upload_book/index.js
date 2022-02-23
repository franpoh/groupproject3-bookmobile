import React, { useState } from "react";
import { Text, View, Alert, ScrollView, TouchableHighlight } from "react-native";
import { Provider as PaperP, DefaultTheme, Card, Title, Paragraph, Divider, Headline, Subheading, List } from 'react-native-paper';
const { v4: uuidv4 } = require('uuid');
import styles from "../../style_constants/style-sheet";
import MyButton from "../../components/button";
import colours from "../../style_constants/colours";
import { useNavigation } from '@react-navigation/native';
import { userB, indexBooks, swap } from '../../components/test-data';
import RetrieveUserSwap from "./components/retrieveuserswap";

const UploadBookScreen = ( { navigation } ) => {
  
  const userId = userB.userId;
  const filtered = swap.filter(data => (data.userId == userId))

  //  My Uploads [Currently Uploaded Books]
  //  swap.indexid > indexbooks.indexid > show image, show title, show author
  //  For each loop, match index id, retrieve image, title, author and show.

  //  if available show in currenly uploaded
  //  (good to have) if not available show in previous uploads

  //  [Upload New Book]
  //  > Alert [can put in book title, book author, image?]
  //  > Navigate to new page
  //  > TextInput and Button
  
  // const [ userUploadedBooks, updateUserUploadedBooks ] = useState(userB.uploadlist);

  function test() {
    // console.log(userB); //returns user info succeesfully
    // console.log(swap); //returns swap list successfully
    // console.log(userId); //returns 4 successfully
    // console.log("Array Z", filtered);
    // console.log("checking test", testfilter);
    console.log("Test Function Ran, Results:");
    RetrieveUserSwap()
    return;
  };

  


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



// (GOOD TO HAVE) IF BANNED, show ban message, divert the user back to main page
// If admin/user show screen, else show user does not exist, divert to registration.
  // if (userB.type == 'ADMIN' || 'USER') {
      // 'BANNED'
      //
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