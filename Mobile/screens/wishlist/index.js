import React, { useState } from "react";
import { Text, View, Alert, ScrollView, TouchableHighlight } from "react-native";
import { Provider as PaperP, DefaultTheme, Card, Title, Paragraph, Divider, Headline, Subheading, List } from 'react-native-paper';
const { v4: uuidv4 } = require('uuid');


import styles from "../../style_constants/style-sheet";
import MyButton from "../../components/button";
import colours from "../../style_constants/colours";

// test data, TBD fetch from DB using userID from nav
import { userA, indexBooks, swap } from '../../components/test-data';

// userA.wishlist = null; // for testing when wishlist is null or array length 0

let trashCan = '\uD83D\uDDD1'; // trashcam emoji U+1F5D1

const WishlistScreen = ({ navigation }) => {

  if (userA.wishlist === null) { userA.wishlist = []};

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
        const matchIndex = indexBooks.filter(data => data.indexId === indexId); // check for title name in index
        // console.log('matched: ', matchIndex);
        const matchSwap = swap.filter(data => (data.indexId === indexId && data.availability === 'YES')); // check swap for YES/NO
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
                { !showDel && (matchSwap.length > 0) && <Text style={{ color: colours.secondaryDark }}>Avail</Text> }
                { showDel && <RemoveIcon value={indexId} />}
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
          'Jumping to',
          `Removing Book ID ${data.value}`,
          [
            { text: "Cancel" },
            {
              test: 'OK',
              onPress: () => {                
                removeBookfromWishList(data.value);
              }
            } 
          ]
        )}
      }>
        <Text>    {trashCan}</Text>
      </TouchableHighlight>                
    );
  };

  function removeBookfromWishList (data) {
    console.log(`removing ${data}`);
    let xx;
    
    for (xx=0; xx < userWishlist.length; xx++) {
      if (userWishlist[xx] === data) {
        userWishlist.splice(xx, 1);        
      };
    };    
    updateUserWishlist(userWishlist);    
    return;
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
        <View style={[styles.rowSpaceBtwn, { height: 'auto', paddingHorizontal: 5 }]}>
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
      text="Testing scrollview" 
      buttonAction={ 
        () => {
          Alert.alert(
            'Placeholder',
            `${userA.wishlist}`,
            [
              { text: "OK" }
            ]
          )
        }
      } 
    /> */}
  </View>
  
)};

export default WishlistScreen;