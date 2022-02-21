import * as React from 'react';
import { Caption, Searchbar } from "react-native-paper";


const BookSearch = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            icon='book-search'
        />

    );
};

export default BookSearch;