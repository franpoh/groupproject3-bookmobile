export {
    userA,
    indexBooks,
    swap
};

const userA = {
    userId: 3,
    username: 'Bob',
    email:'abc123@hmail.com',
    password: "abcdefg",
    points: 999,
    wishlist: [2,5,7,9,10,23,45,66],
    type: 'USER'
};

const indexBooks = [
    {
        indexId: 1,
        title: 'Name of Book1',
        author: 'Name of author1',
        year: 1980,
        genreId: 1,
        imageURL: null,
    },
    {
        indexId: 2,
        title: 'Name of Book2 which is super bloody long all the way to landscape mode end',
        author: 'Name of author2',
        year: 1980,
        genreId: 1,
        imageURL: null,
    },
    {
        indexId: 5,
        title: 'Name of Book5',
        author: 'Name of author5',
        year: 1980,
        genreId: 1,
        imageURL: null,
    },
    {
        indexId: 7,
        title: 'Name of Book7',
        author: 'Name of author7',
        year: 1980,
        genreId: 1,
        imageURL: null,
    },
    {
        indexId: 9,
        title: 'Name of Book9',
        author: 'Name of author9',
        year: 1980,
        genreId: 1,
        imageURL: null,
    },
    {
        indexId: 10,
        title: 'Name of Book10',
        author: 'Name of author10',
        year: 1980,
        genreId: 1,
        imageURL: null,
    },
    {
        indexId: 23,
        title: 'Name of Book23',
        author: 'Name of author23',
        year: 1980,
        genreId: 1,
        imageURL: null,
    },
    {
        indexId: 45,
        title: 'Name of Book45',
        author: 'Name of author45',
        year: 1980,
        genreId: 1,
        imageURL: null,
    },
    {
        indexId: 66,
        title: 'Name of Book66',
        author: 'Name of author66',
        year: 1980,
        genreId: 1,
        imageURL: null,
    },    
];

const swap = [
    {
        swapId: 4,
        price: 1,
        comments: "good",
        indexId: 2,
        availability: "YES"
    },
    {
        swapId: 7,
        price: 1,
        comments: "good",
        indexId: 5,
        availability: "YES"
    },
    {
        swapId: 9,
        price: 1,
        comments: "good",
        indexId: 7,
        availability: "NO"
    },
    {
        swapId: 44,
        price: 1,
        comments: "good",
        indexId: 9,
        availability: "YES"
    },
    {
        swapId: 54,
        price: 1,
        comments: "good",
        indexId: 9,
        availability: "YES"
    },
    {
        swapId: 62,
        price: 1,
        comments: "good",
        indexId: 10,
        availability: "NO"
    },
    {
        swapId: 70,
        price: 1,
        comments: "good",
        indexId: 23,
        availability: "YES"
    },
    {
        swapId: 80,
        price: 1,
        comments: "good",
        indexId: 45,
        availability: "YES"
    },
    {
        swapId: 164,
        price: 1,
        comments: "good",
        indexId: 66,
        availability: "YES"
    },
];