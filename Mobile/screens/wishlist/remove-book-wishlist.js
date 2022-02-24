// requires parent to pass indexId, userWishList as object keys

export default function removeBookfromWishList (data) {
    
    console.log(`removing ${data.indexId}`);
    let xx;
    
    for (xx=0; xx < data.userWishlist.length; xx++) {
      if (data.userWishlist[xx] === data.indexId) {
        data.userWishlist.splice(xx, 1);        
      };
    };        
    return data.userWishlist;
};

