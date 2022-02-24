import React, { useState } from "react";
import { Text, View, Alert, Image, ScrollView, TouchableHighlight } from "react-native";
import { Provider as PaperP, DefaultTheme, Card, Title, Paragraph, Divider, Headline, Subheading, List } from 'react-native-paper';

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";

import AuthContext from "../../context";

import colours from "../../style_constants/colours";

import addBooktoWishList from "../wishlist/add-book-wishlist";

import { userA, indexBooks, swap } from '../../components/test-data';

function BookDetailsScreen({ route, navigation }) {

  const { user } = React.useContext(AuthContext);

  console.log('in book details', user);

  let indexId = route.params.indexId;
  let userToken = user; 
  // value not being pass at General Stack
  // userToken=null;
  // userToken='melon';

  let localIndexBooks = indexBooks;
  let localSwapBooks = swap;
  let localUser = userA;

  if (localUser.wishlist === null) { localUser.wishlist = []}; 

  const matchIndex = localIndexBooks.filter(data => data.indexId === indexId);
  const matchSwap = localSwapBooks.filter(data => (data.indexId === indexId && data.availability === 'YES')); // check swap for YES/NO

  console.log('matchSwap: ', matchSwap);

  const [ userWishlist, updateUserWishlist ] = useState(localUser.wishlist);

  // check if already in wishlist
  let xx;
  let wishYes=false;
  for (xx=0; xx < userWishlist.length; xx++) {
    if (userWishlist[xx] === indexId) {
      console.log('book is already in wishlist');
      wishYes=true;
      ;
    };
  };

  const [ currentBookWish, updateCurrentBookWish ] = useState(wishYes);



  function WishButton() {   

    return (
      <MyButton
        text={currentBookWish ? "In Wishlist" : "Add to Wishlist"}
        buttonAction={
          () => {
            if (currentBookWish) {
              
            } else if (userToken != null) {
              const updateWishlist =addBooktoWishList({
                indexId: indexId,
                userWishlist: userWishlist
              });

              console.log(updateWishlist);
              updateUserWishlist(updateWishlist);  
              updateCurrentBookWish(!currentBookWish);          
            };            
          }
        }
      />
    )
  };

  function UploadReviewButton() {

    return (
      <MyButton
        text="Upload a review"
        buttonAction={
          () => {
            if (userToken != null) {            
              navigation.navigate("Review Upload", {screen: "Review Upload"});              
            };            
          }
        }
      />
    )
  };

  function DisplaySwapInventory() {

    // in case matchswap length = 0 still reach here
    if (matchSwap.length === 0) {
      return <View></View>
    };

    return matchSwap.map((props) => {

      console.log('at map',props);

      const swapItem = props;

      return <List.Item key={indexId} titleStyle={{ fontSize:1 }} description={props => {

        console.log('at list item',props);

        return (
          <View style={styles.rowSpaceBtwn}>
            <View style={{ flex: 6 }}>
              <TouchableHighlight onPress={() => {Alert.alert(
                'Purchase Copy',
                `By user ${swapItem.userId}`,
                [
                  { text: "OK" }
                ]
              )}}>
                <Text>copy</Text>
              </TouchableHighlight>                
            </View>
            {/* <View style={{ flex: 1 }}>                
              { !showDel && (matchSwap.length > 0) && <Text style={{ color: colours.secondaryDark, alignSelf: 'flex-end' }}>Avail</Text> }
              { showDel && <RemoveIcon indexIdValue={indexId} bookTitleValue={matchIndex[0].title} wishListValue={userWishlist} />}
            </View> */}
          </View>
        
        ) 
      }} />;


      }
    );
  };

  
  // matchIndex[0].imageURL = null; // for testing when book has no imageURL


  return (
  <ScrollView>
  <View style={styles.container}>
    
      <PaperP>
      <View style={[styles.contentArea, { marginTop: 0 }]}>
        <View style={[styles.rowSpaceBtwn, { height: 150, paddingBottom: 10, justifyContent: 'flex-start' }]}>
          <Text style={[styles.textBold, { flex: 3 }]}>{matchIndex[0].title}</Text>
          {(matchIndex[0].imageURL != null) ? <Image source={matchIndex[0].imageURL} resizeMode='contain' style={{ width: 100, height: 150, flex: 1 }} />: <View></View>}          
        </View>

        <Divider />
        <Text>Author: {matchIndex[0].author}</Text>
        <Text>Year: {matchIndex[0].year}</Text>
        <Text style={{ paddingBottom: 10}}>Genre: {matchIndex[0].genreId}</Text>
        <Divider />

        <View style={{ opacity: (userToken != null) ? 1: 0.5 }}>

          <View style={styles.rowSpaceBtwn}>
            <Text>Current available points: { (userToken != null) ? localUser.points : <Text> You are not logged in</Text>}</Text>
          </View>

          <View style={[styles.rowSpaceBtwn, { alignItems: 'stretch', flexDirection: 'column', marginBottom: 10 }]}>
            <WishButton />            
          </View>

          <View style={[styles.rowSpaceBtwn, { alignItems: 'stretch', flexDirection: 'column', marginBottom: 10 }]}>
            <UploadReviewButton />            
          </View>
          <Divider />          
          
          {(matchSwap.length != 0) ? <List.Section><DisplaySwapInventory /></List.Section> : <Text>Currently no copies available</Text>}         
          
        </View>    

    {/* <MyButton
      text="Buy"
      buttonAction={
        () => {
          Alert.alert(
            'Placeholder',
            "Book has been purchased",
            [
              { text: "OK" }
            ]
          )
        }
      }
    />    */}
    </View>
    </PaperP>
    
  </View>
  </ScrollView>
)};

export default BookDetailsScreen;