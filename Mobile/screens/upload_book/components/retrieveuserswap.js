import { userB, indexBooks, swap } from '../../../components/test-data';

  //  My Uploads [Currently Uploaded Books]
  //  swap.indexid > indexbooks.indexid > show image, show title, show author
  //  For each loop, match index id, retrieve image, title, author and show.


const RetrieveUserSwapYes = () => {

    const userId = userB.userId;
    const filteredyes = swap.filter(data => (data.userId == userId && data.availability == "YES"))
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
    const retrievedUserSwapYes = userSwap.map(function(c) {
        var o = userSwapDictionary[c];
        return {
            author: o.author,
            title: o.title,
            indexId: o.indexId,
            imageURL: o.imageURL
        };
    });
    
    // console.log("Retrieved User Swap:", retrievedUserSwapYes);

    return retrievedUserSwapYes;
};

//take all the index id, put into an array.
//check indexbooks for index id, put it into another array.
//for each element in array, <List> and show element.author element.image element.title.


const RetrieveUserSwapNo = () => {

    const userId = userB.userId;
    const filteredno = swap.filter(data => (data.userId == userId && data.availability == "NO"))
    let obj = {};
    // make new array of user's swap books
    const userSwap = filteredno.map(
        element => element.indexId
    );
    
    //make a dictionary of indexbook's indexid
    userSwapDictionary = indexBooks.reduce(function(p, c) {
        p[c.indexId] = c;
        return p;
    }, {});
    
    //compare user's swap books index with dictionary, take out necessary details.
    const retrievedUserSwapNo = userSwap.map(function(c) {
        var o = userSwapDictionary[c];
        return {
            author: o.author,
            title: o.title,
            indexId: o.indexId,
            imageURL: o.imageURL
        };
    });
    
    // console.log("Retrieved User Swap:", retrievedUserSwapNo);

    return retrievedUserSwapNo;
};
export { RetrieveUserSwapYes, RetrieveUserSwapNo };