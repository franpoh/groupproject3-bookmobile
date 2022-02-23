import React, { useState } from "react";
import { Text, View, Alert, ScrollView, TouchableHighlight } from "react-native";
import { Provider as PaperP, DefaultTheme, Card, Title, Paragraph, Divider, Headline, Subheading, List } from 'react-native-paper';
const { v4: uuidv4 } = require('uuid');


import styles from "../../style_constants/style-sheet";
import MyButton from "../../components/button";
import colours from "../../style_constants/colours";

import removeBookfromWishList from "./remove-book-wishlist";

// test data, TBD fetch from DB using userID from nav
import { userA, indexBooks, swap } from '../../components/test-data';

// userA.wishlist = null; // for testing when wishlist is null or array length 0

let trashCan = '\uD83D\uDDD1'; // trashcam emoji U+1F5D1

const WishlistScreen = ({ navigation }) => {

  let localIndexBooks = indexBooks;
  let localSwapBooks = swap;

  if (userA.wishlist === null) { userA.wishlist = []};
  let localindexBooks

  const [ showDel, setShowDel ] = useState(false);
  const [ userWishlist, updateUserWishlist ] = useState(userA.wishlist);

  function CheckList () {

    if (userWishlist.length === 0) {
      // console.log('empty', typeof userA.wishlist);
      // console.log('empty', userA.wishlist);
      return (
        <List.Item titleStyle={{ fontSize:1 }} description={props => <Text>Your wishlist is empty</Text>} />
      )
    } else if (userWishlist.length > 0) {
      // go to generating actual list      
      return generateList();
    } else {
      console.log('unknown value in wishlist var');
      return (
      <View></View>
    )};
  };

  function generateList() {

    console.log('checking refresh: ', userWishlist);

    return userWishlist.map(
      (indexId) => {
        // console.log(indexId);
        const matchIndex = localIndexBooks.filter(data => data.indexId === indexId); // check for title name in index
        if (matchIndex.length === 0) {
          return <View></View>; // in rare event wishlist and index indexID become desync (eg, wishlist keeps IndexId 4 but 4 somehow deleted from Idex inventory DB)
        };
        // console.log('matched: ', matchIndex);
        const matchSwap = localSwapBooks.filter(data => (data.indexId === indexId && data.availability === 'YES')); // check swap for YES/NO
        // console.log('swap YES: ', matchSwap);
        return <List.Item key={indexId} titleStyle={{ fontSize:1 }} description={props => {
          return (
            <View style={styles.rowSpaceBtwn}>
              <View style={{ flex: 6 }}>
                <TouchableHighlight onPress={() => {Alert.alert(
                  'Jumping to',
                  `Book Details of Book ID ${indexId} which is currently not assigned :D`,
                  [
                    { text: "OK" }
                  ]
                )}}>
                  <Text>{matchIndex[0].title}</Text>
                </TouchableHighlight>                
              </View>
              <View style={{ flex: 1 }}>                
                { !showDel && (matchSwap.length > 0) && <Text style={{ color: colours.secondaryDark, alignSelf: 'flex-end' }}>Avail</Text> }
                { showDel && <RemoveIcon indexIdValue={indexId} bookTitleValue={matchIndex[0].title} wishListValue={userWishlist} />}
              </View>
            </View>
          
          ) 
        }} />;
      }
    );
  };

  function RemoveIcon (data) {

    return (
      <TouchableHighlight onPress={() => {        
        Alert.alert(
          'Are you sure?',
          `Removing Book '${data.bookTitleValue}'`,
          [
            { text: "Cancel" },
            {
              test: 'OK',
              onPress: () => {                
                const updateWishlist =removeBookfromWishList({
                  indexId: data.indexIdValue,
                  userWishlist: data.wishListValue
                });

                console.log(updateWishlist);
                updateUserWishlist(updateWishlist);
                setShowDel(!showDel);  
              }
            } 
          ]
        )
      }
      }>
        <Text style={{ alignSelf:'flex-end' }}>{trashCan}  </Text>
      </TouchableHighlight>                
    );
  };  
  
  return (
  // <PaperP style={styles.container}>
  //   <Text>Wishlist</Text>    
  // </PaperP>
  
  <View style={styles.container}>
    <PaperP>
    
      <View style={styles.contentArea}>
      <List.Section>
      <ScrollView>
        <View style={[styles.rowSpaceBtwn, { height: 'auto', paddingHorizontal: 15 }]}>
          <List.Subheader style={styles.h3Bold}>Wishlist Section</List.Subheader>
          <TouchableHighlight onPress={() => {setShowDel(!showDel)}}>
            <Text style={{
              borderWidth: showDel ? 1 : 0,
              borderRadius: 5,
              padding: 3,
              paddingRight: 1              
            }}>{trashCan}</Text>
          </TouchableHighlight>
        </View>        
        <Divider />
        
        <CheckList />
        </ScrollView>
      </List.Section>
      </View>      
    </PaperP>  
    {/* <MyButton 
    //   text="Testing scrollview" 
    //   buttonAction={ 
    //     () => {
    //       Alert.alert(
    //         'Placeholder',
    //         `${userA.wishlist}`,
    //         [
    //           { text: "OK" }
    //         ]
    //       )
    //     }
    //   } 
    // /> */}
  </View>
  
)};

export default WishlistScreen;