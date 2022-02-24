import { Text, View, Alert, ScrollView, TouchableHighlight } from "react-native";
// requires parent to pass indexId, userWishList as object keys

export default function addBooktoWishList (data) {
    
    console.log(`adding ${data.indexId}`);
    let xx;
    
    // check if already in wishlist
    for (xx=0; xx < data.userWishlist.length; xx++) {
      if (data.userWishlist[xx] === data.indexId) {
        Alert.alert(
            'Cannot add',
            `Book already in wishlist!`,
            [              
                {
                text: 'OK'                
                }
            ]
        );
        return data.userWishlist;
      };
    };

    data.userWishlist.push(data.indexId);
    
    return data.userWishlist;
};

