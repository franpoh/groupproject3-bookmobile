import React, { useState } from "react";
import { Text, View, Alert, ScrollView, TouchableHighlight, Image } from "react-native";
import { Provider as PaperP, DefaultTheme, Card, Title, Paragraph, Divider, Headline, Subheading, List, TextInput } from 'react-native-paper';
const { v4: uuidv4 } = require('uuid');
import styles from "../../style_constants/style-sheet";
import MyButton from "../../components/button";
import colours from "../../style_constants/colours";
import { useNavigation } from '@react-navigation/native';
import { userB, indexBooks, swap } from '../../components/test-data';
import {RetrieveUserSwapYes, RetrieveUserSwapNo} from "./components/retrieveuserswap";

const UploadBookScreen = ( { navigation } ) => {
  const [newSwapAuthor, setNewSwapAuthor] = React.useState("");
  const [newSwapTitle, setNewSwapTitle] = React.useState("");

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

  function GenerateUserSwapYes() {
    const navigation = useNavigation();
    const retrieveUserSwapYes = RetrieveUserSwapYes();
    // console.log("Retrieved User Swap Yes Details:", retrieveUserSwapYes)
    
    return retrieveUserSwapYes.map((element => {
      return (
          <View key={element.indexId} style={{ margin: 10 }}>
              <View>
                  <List.Item
                      title={element.title}
                      description={element.author}
                      onPress={() => navigation.navigate("Book Details", { screen: "Book Details" })}
                      right={props => (
                          <Image {...props}
                              style={{ width: 66, height: 95 }}
                              source={element.imageURL}
                          />
                      )}
                      
                  />
              </View>
          </View>
      )
  }));

  };

  function GenerateUserSwapNo() {
    const navigation = useNavigation();
    const retrieveUserSwapNo = RetrieveUserSwapNo();
    // console.log("Retrieved User Swap No Details:", retrieveUserSwapNo)
    
    return retrieveUserSwapNo.map((element => {
      return (
          <View key={element.indexId} style={{ margin: 10 }}>
              <View>
                  <List.Item
                      title={element.title}
                      description={element.author}
                      onPress={() => navigation.navigate("Book Details", { screen: "Book Details" })}
                      right={props => (
                          <Image {...props}
                              style={{ width: 66, height: 95 }}
                              source={element.imageURL}
                          />
                      )}
                      
                  />
              </View>
          </View>
      )
  }));
  
  };
  //Function Uploadbook take params price, let price = 1
  // optional comments
  // userid
  // checks if there is such a book in index backend, if not create database, then addtoswap.
  // this function also adds this book to booklist (append to array)
  // then refresh currently uploaded books to show new list.

return (
  <PaperP>

    <ScrollView style={styles.contentArea}>

        <List.Section>
        <List.Subheader style={styles.h3Bold}>My Uploads</List.Subheader>
        <List.Accordion
          title="Currently Uploaded Books"
          left={props => <List.Icon color={colours.primary} icon="clipboard-text-multiple-outline"/>}>
          <GenerateUserSwapYes/>

        </List.Accordion>
        
        <List.Accordion
          title="Previous Uploads"
          left={props => <List.Icon color={colours.primary} icon="clipboard-check-multiple-outline"/>}>
          <GenerateUserSwapNo/>
        </List.Accordion>
        
        <List.Accordion
          title="Upload New Book"
          left = {props => <List.Icon color={colours.primary} icon="clipboard-arrow-up-outline"/>}
        >
          <TextInput
            label = "Book Title"
            value = {newSwapTitle}
            onChangeText={text => setNewSwapTitle(text)}
          />
          <TextInput
            label = "Author"
            value = {newSwapAuthor}
            onChangeText={text => setNewSwapAuthor(text)}
          />
          <MyButton
          text="Upload Book"

          buttonAction={ 
            () => {
              Alert.alert(
                'Placeholder',
                "Book has been Uploaded Successfully.",
                [
                  { text: "OK" }
                ]
              );
              setNewSwapTitle("");
              setNewSwapAuthor("");
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