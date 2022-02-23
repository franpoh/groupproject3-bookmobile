import React, { useState } from "react";
import { Text, View, Alert, ScrollView, TouchableHighlight } from "react-native";
import { Provider as PaperP, DefaultTheme, Card, Title, Paragraph, Divider, Headline, Subheading, List } from 'react-native-paper';
const { v4: uuidv4 } = require('uuid');
import styles from '../../../style_constants/style-sheet'
import colours from "../../../style_constants/colours";
import { useNavigation } from '@react-navigation/native';
import { userB, indexBooks, swap } from '../../../components/test-data';

  //  My Uploads [Currently Uploaded Books]
  //  swap.indexid > indexbooks.indexid > show image, show title, show author
  //  For each loop, match index id, retrieve image, title, author and show.


const RetrieveUserSwap = () => {

    const userId = userB.userId;
    const filteredyes = swap.filter(data => (data.userId == userId))
    let obj = {};
    // make new array of user's swap books
    const userSwap = filteredyes.map(
        element => element.indexId
    );
    
    //make a dictionary of indexbook's indexid
    userSwapDictionary = indexBooks.reduce(function(p, c) {
        p[c.indexId] = c;
        return p;
    }, {});
    
    //compare user's swap books index with dictionary, take out necessary details.
    const retrievedUserSwap = userSwap.map(function(c) {
        var o = userSwapDictionary[c];
        return {
            author: o.author,
            title: o.title,
            indexId: o.indexId,
            imageURL: o.imageURL
        };
    });
    
    console.log("Retrieved User Swap:", retrievedUserSwap);

    return retrievedUserSwap;
};

//take all the index id, put into an array.
//check indexbooks for index id, put it into another array.
//for each element in array, <List> and show element.author element.image element.title.

export default RetrieveUserSwap;