// requires parent to pass indexId, userWishList as object keys

export default function addBooktoWishList (data) {
    console.log('data: ', data);
    console.log(`removing ${data.indexId}`);
    let xx;
    
    // check if already in wishlist
    for (xx=0; xx < data.userWishlist.length; xx++) {
      if (data.userWishlist[xx] === data.indexId) {
        Alert.alert(
            'Cannot add',
            `Book already in wishlist!`,
            [              
                {
                test: 'OK'                
                }
            ]
        );
        return data.userWishlist;
      };
    };

    data.userWishlist.push(data.indexId);
    
    return data.userWishlist;
};

