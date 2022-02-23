export {
    userA,
    userB,
    indexBooks,
    swap
};

const userA = {
    userId: 3,
    username: 'Bob',
    email: 'abc123@hmail.com',
    password: "abcdefg",
    points: 999,
    wishlist: [2, 5, 7, 9, 10, 23, 45, 66],
    type: 'USER'
};

const userB = {
    userId : 4,
    username: 'Aarontest',
    email: 'Aarontest@hmail.com',
    password: 'abcdefg',
    points: 100,
    wishlist: [1,2,5],
    type: 'USER'
}

const indexBooks = [
    {
        indexId: 1,
        title: 'Name of Book1',
        author: 'Name of author1',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
        }

    },
    {
        indexId: 2,
        title: 'Name of Book2 which is super bloody long all the way to landscape mode end',
        author: 'Name of author2',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
        }

    },
    {
        indexId: 5,
        title: 'Name of Book5',
        author: 'Name of author5',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
        }

    },
    {
        indexId: 7,
        title: 'Name of Book7',
        author: 'Name of author7',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
        }

    },
    {
        indexId: 9,
        title: 'Name of Book9',
        author: 'Name of author9',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
        }

    },
    {
        indexId: 10,
        title: 'Name of Book10',
        author: 'Name of author10',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
        }

    },
    {
        indexId: 23,
        title: 'Name of Book23',
        author: 'Name of author23',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
        }

    },
    {
        indexId: 45,
        title: 'Name of Book45',
        author: 'Name of author45',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
        }

    },
    {
        indexId: 66,
        title: 'Name of Book66',
        author: 'Name of author66',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
        }

    },
];

const swap = [
    {
        swapId: 4,
        price: 1,
        comments: "good",
        indexId: 2,
        userId: 3,
        availability: "YES"
    },
    {
        swapId: 7,
        price: 1,
        comments: "good",
        indexId: 5,
        userId: 3,
        availability: "YES"
    },
    {
        swapId: 9,
        price: 1,
        comments: "good",
        indexId: 7,
        userId: 3,
        availability: "NO"
    },
    {
        swapId: 44,
        price: 1,
        comments: "good",
        indexId: 9,
        userId: 3,
        availability: "YES"
    },
    {
        swapId: 54,
        price: 1,
        comments: "good",
        indexId: 9,
        userId: 4,
        availability: "YES"
    },
    {
        swapId: 62,
        price: 1,
        comments: "good",
        indexId: 10,
        userId: 4,
        availability: "NO"
    },
    {
        swapId: 70,
        price: 1,
        comments: "good",
        indexId: 23,
        userId: 4,
        availability: "YES"
    },
    {
        swapId: 80,
        price: 1,
        comments: "good",
        indexId: 45,
        userId: 4,
        availability: "YES"
    },
    {
        swapId: 164,
        price: 1,
        comments: "good",
        indexId: 66,
        userId: 4,
        availability: "YES"
    },
];