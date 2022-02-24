import React, { useState } from "react";
import { Text, View, Alert, Image, ScrollView, TouchableHighlight } from "react-native";
import { Provider as PaperP, DefaultTheme, Card, Title, Paragraph, Divider, Headline, Subheading, List, Dialog, TextInput, Portal } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";

import AuthContext from "../../context";

import colours from "../../style_constants/colours";

import addBooktoWishList from "../wishlist/add-book-wishlist";
import removeBookfromWishList from "../wishlist/remove-book-wishlist";
import grabABook from "./grab-book";
import { ReviewList, ReviewDialog, UploadReviewButton } from "./book-review";

import { userA, indexBooks, swap, reviews, swapReviewMerged, uploadedReviews } from '../../components/test-data';
import { getPixelSizeForLayoutSize } from "react-native/Libraries/Utilities/PixelRatio";

function BookDetailsScreen({ route, navigation }) {

  const { user } = React.useContext(AuthContext);

  // Upload Reviews
  const [review, setReview] = React.useState("");
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const [reviewList, setReviewList] = React.useState(uploadedReviews);

  // console.log('in book details', user);

  let indexId = route.params.indexId;
  let userToken = user;

  let localIndexBooks = indexBooks;
  // let localSwapBooks = swap;
  let localSwapBooks = swapReviewMerged;

  const [localUser, updateLocalUser] = useState(userA);

  // localUser.points = 0; // for testing when points unable to purchase books

  if (localUser.wishlist === null) { localUser.wishlist = [] };

  const matchIndex = localIndexBooks.filter(data => data.indexId === indexId);
  // const matchSwap = localSwapBooks.filter(data => (data.indexId === indexId && data.availability === 'YES')); // check swap for YES/NO

  const [matchSwap, updateMatchSwap] = useState(localSwapBooks.filter(data => (data.indexId === indexId && data.availability === 'YES')));

  const [userWishlist, updateUserWishlist] = useState(localUser.wishlist);

  // check if already in wishlist
  let xx;
  let wishYes = false;
  for (xx = 0; xx < userWishlist.length; xx++) {
    if (userWishlist[xx] === indexId) {
      console.log('book is already in wishlist');
      wishYes = true;
      ;
    };
  };

  const [currentBookWish, updateCurrentBookWish] = useState(wishYes);



  function WishButton() {

    return (
      <TouchableHighlight
        style={[styles.rowSpaceBtwn, {
          flex: 1,
          backgroundColor: currentBookWish ? colours.secondaryLight : 'transparent',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: colours.secondaryLight,
          marginBottom: 10
        }]}
        onPress={() => {
          if (userToken === null) {
            return;
          } else if (currentBookWish) {
            const updateWishlist = removeBookfromWishList({
              indexId: indexId,
              userWishlist: userWishlist
            });
            // console.log(updateWishlist);
            updateUserWishlist(updateWishlist);
            updateCurrentBookWish(!currentBookWish);
          } else if (userToken != null) {
            const updateWishlist = addBooktoWishList({
              indexId: indexId,
              userWishlist: userWishlist
            });
            // console.log(updateWishlist);
            updateUserWishlist(updateWishlist);
            updateCurrentBookWish(!currentBookWish);
          };
        }}>
        {currentBookWish ? <Text>IN WISHLIST</Text> : <Text>ADD TO WISHLIST</Text>}
      </TouchableHighlight>
    )
  };

  function DisplaySwapInventory() {

    // in case matchswap length = 0 still reach here
    if (matchSwap.length === 0) {
      return <View></View>
    };

    return matchSwap.map((swapItem, index) => {

      return <List.Item key={index} titleStyle={{ fontSize: 1 }} description={props => {

        return (
          <View style={[styles.rowSpaceBtwn, { marginVertical: -10 }]}>
            <TouchableHighlight
              style={{ padding: 4, borderWidth: 1, flex: 1 }}
              onPress={() => {
                if (userToken === null) { // if no token
                  return;
                };

                Alert.alert(
                  'Are you sure?',
                  `Buy copy of '${matchIndex[0].title}'`,
                  [
                    { text: "Cancel" },
                    {
                      text: 'OK',
                      onPress: () => {

                        if (localUser.points < swapItem.price) { // 1st round check for points
                          Alert.alert(
                            'Error',
                            `You do not have enough points`,
                            [
                              { text: "OK" }
                            ]
                          );
                          return;
                        };

                        let grabProcess = grabABook({
                          swapItem: swapItem,
                          localUser: localUser
                        });

                        if (grabProcess.status === 'Point Fail') { // failed transaction
                          console.log(grabProcess.status);
                          return;
                        };

                        if (grabProcess.status === 'Swap Fail') { // failure at swap availability
                          console.log(grabProcess.status);
                          // CAPSTONE need to trigger actual refresh of swap inventory from DB 
                          updateMatchSwap(localSwapBooks.filter(data => (data.indexId === indexId && data.availability === 'YES')));
                          return;
                        };

                        if (grabProcess.status === 'Swap Done') { // transaction complete
                          console.log(grabProcess.status);
                          // CAPSTONE need to trigger actual refresh of swap inventory from DB, below is mock edits
                          const newlocalSwap = [...localSwapBooks];
                          const targetIndex = localSwapBooks.findIndex(aa => aa.swapId === swapItem.swapId);
                          newlocalSwap[targetIndex].availability = 'NO';
                          updateMatchSwap(newlocalSwap.filter(data => (data.indexId === indexId && data.availability === 'YES')));

                          // CAPSTONE trigger wishlist update so book indexID removed from user wishlist since bought
                          const updateWishlist = removeBookfromWishList({
                            indexId: indexId,
                            userWishlist: userWishlist
                          });
                          updateUserWishlist(updateWishlist);
                          updateCurrentBookWish(!currentBookWish);
                          return;
                        };
                      }
                    }
                  ]
                )
              }}>
              <Text>Condition: {swapItem.comments}, User: {swapItem.userId}, Points: {swapItem.price}, Review: {swapItem.review}</Text>
            </TouchableHighlight>
          </View>

        )
      }} />;


    }
    );
  };


  // matchIndex[0].imageURL = null; // for testing when book has no imageURL
  // Put provider as outermost layer, otherwise reviewdialog dark background did not render properly - Francine
  return (
    <PaperP>
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.contentArea, { marginTop: -10 }]}>
            <View style={[styles.rowSpaceBtwn, { height: 150, paddingBottom: 10, justifyContent: 'center', alignItems: 'center' }]}>
              {(matchIndex[0].imageURL != null) ? <Image source={matchIndex[0].imageURL} resizeMode='contain' style={{ width: 100, height: 150, flex: 1, paddingRight: 25 }} /> : <MaterialCommunityIcons name='image-off-outline' size={50} style={{ alignSelf: 'center', padding: 18 }} />}
              <Text style={[styles.textBold, { flex: 3, paddingLeft: 25 }]}>{matchIndex[0].title}</Text>
            </View>

            <Divider />
            <Text>Author: {matchIndex[0].author}</Text>
            <Text>Year: {matchIndex[0].year}</Text>
            <Text style={{ paddingBottom: 10 }}>Genre: {matchIndex[0].genreId}</Text>
            <Divider />

            <View style={{ opacity: (userToken != null) ? 1 : 0.3 }}>

              <View style={[styles.rowSpaceBtwn, { marginBottom: 10 }]}>
                <Text>Current available points: {(userToken != null) ? localUser.points : <Text> You are not logged in</Text>}</Text>
              </View>

              <WishButton />

              <UploadReviewButton setDialogVisible={setDialogVisible} />

              <ReviewDialog
                dialogVisible={dialogVisible}
                setDialogVisible={setDialogVisible}
                review={review}
                setReview={setReview}
                setReviewList={setReviewList}
              />

              <Divider />

              {(matchSwap.length != 0) ?
                <List.Section>
                  <List.Subheader>Inventory available: {matchSwap.length}</List.Subheader>
                  <DisplaySwapInventory />
                </List.Section>
                : <Text>Currently not in inventory</Text>
              }

              <Text style={[styles.h3Bold, { marginBottom: 10 }]}>Community Reviews</Text>
              <ReviewList reviewList={reviewList} />
            </View>
          </View>
        </View>
      </ScrollView>
    </PaperP>
  )
};

export default BookDetailsScreen;