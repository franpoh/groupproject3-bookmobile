import * as React from 'react';
import { Caption, Searchbar, Provider as PaperP } from "react-native-paper";


const BookSearch = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);


    return (
        <PaperP>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                // onChangeText={(event) => {
                //     searchFilter(event.nativeEvent.text);
                // }} // use with useEffect(), [xxx]
                value={searchQuery}
                icon='book-search'
            />
        </PaperP>


    );
};

// with data from API link 
// const searchFilter = (text) => {
//     if (text) {
//         const newData = data.filter(item => {
//             const itemData = item.name.first ? item.name.first.toUpperCase() : ''.toUpperCase();
//             const textData = text.toUpperCase();
//             return itemData.indexOf(textData) > -1;
//         })
//         setFilteredData(newData);
//     } else {
//         setFilteredData(data);
//     }

// }

export default BookSearch;