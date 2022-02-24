export {
    userA,
    userB,
    indexBooks,
    swap,
    reviews
};

const userA = {
    userId: 3,
    userImage: require("../assets/user.jpg"),
    username: 'Bob',
    email: 'abc123@hmail.com',
    password: "abcdefg",
    points: 999,
    wishlist: [2, 5, 7, 9, 10, 23, 45, 66],
    type: 'USER'
};

const userB = {
    userId: 4,
    username: 'Aarontest',
    email: 'Aarontest@hmail.com',
    password: 'abcdefg',
    points: 100,
    wishlist: [1, 2, 5],
    type: 'USER'
}

// https://thegreatestbooks.org/the-greatest-fiction-since/1980
const indexBooks = [
    {
        indexId: 1,
        title: 'Beloved',
        author: 'Toni Morrison',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://d3i5mgdwi2ze58.cloudfront.net/rgbp8t53jgjxf52ibulydun84k0m',
        }

    },
    {
        indexId: 2,
        title: 'Beloved',
        author: 'Salman Rushdie',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://d3i5mgdwi2ze58.cloudfront.net/c5ocu6hs583593c4k92ij9y71soe',
        }

    },
    {
        indexId: 5,
        title: 'The Color Purple',
        author: 'Alice Walker',
        year: 1980,
        genreId: 1,
        // imageURL: {
        //     uri: 'https://d3i5mgdwi2ze58.cloudfront.net/2v05vz7oibe2oh00d0jng1amrir9',
        // }      
        imageURL: null,
    },
    {
        indexId: 7,
        title: 'The Handmaids Tale',
        author: 'Margaret Atwood',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://d3i5mgdwi2ze58.cloudfront.net/tedjyaopg0lwwmpmt2bepq6kby7p',
        }

    },
    {
        indexId: 9,
        title: 'A Confederacy of Dunces',
        author: 'John Kennedy Toole',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://d3i5mgdwi2ze58.cloudfront.net/rstxal8xk784d7288orvapc0xogl',
        }

    },
    {
        indexId: 10,
        title: 'Atonement',
        author: 'Ian McEwan',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://d3i5mgdwi2ze58.cloudfront.net/alnlrd2t0gt0y12ac1r8owz72kjx',
        }

    },
    {
        indexId: 23,
        title: 'White Teeth',
        author: 'Zadie Smith',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://d3i5mgdwi2ze58.cloudfront.net/kkrgvs3k1xcg5y4wbjy12crve9ia',
        }

    },
    {
        indexId: 45,
        title: 'Stories of Ernest Hemingway',
        author: 'Ernest Hemingway',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://d3i5mgdwi2ze58.cloudfront.net/5wf6o4u0ir8ackb0yfeycgzfpl54',
        }

    },
    {
        indexId: 66,
        title: ' Love in the Time of Cholera',
        author: 'Gabriel Garcia Marquez',
        year: 1980,
        genreId: 1,
        imageURL: {
            uri: 'https://d3i5mgdwi2ze58.cloudfront.net/q8z45hoowjkdzz8ehp0rcozm0u2n',
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

const reviews = [
    {
        reviewId: 1,
        review: "Good for long rides",
        userId: 4,
        indexId: 66
    },
    {
        reviewId: 1,
        review: "Absolute mind blown",
        userId: 4,
        indexId: 23
    },
    {
        reviewId: 1,
        review: "Recommended. Didnt feel like 6000 pages",
        userId: 3,
        indexId: 5
    },
    {
        reviewId: 1,
        review: "Love the theme",
        userId: 3,
        indexId: 7
    },
    {
        reviewId: 1,
        review: "Best thriller Ive read",
        userId: 4,
        indexId: 9
    },
    {
        reviewId: 1,
        review: "Not sure why _ would do that",
        userId: 3,
        indexId: 2
    }
];
