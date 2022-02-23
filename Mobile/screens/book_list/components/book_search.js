import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Image, View, TouchableOpacity, TextInput } from 'react-native';
import { Text, Searchbar, Provider as PaperP } from "react-native-paper";
import { userA, indexBooks, swap } from '../../../components/test-data';
import GetBooks from '../getBooks';



const BookSearch = () => {
    // const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [search, setSearch] = React.useState('');
    const [filteredData, setFilteredData] = React.useState([]);
    const localIndexBooks = indexBooks;

    // backend
    // useEffect(() => {
    //   fetch("https://localhost).then((response) => {}})
    // },  []);

    const searchFilter = (text) => {
        if (text) {
            const newData = localIndexBooks.filter(item => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilteredData(newData);
            console.log(newData);
            setSearch(text);
        } else {
            setFilteredData(localIndexBooks);
            setSearch(text);
        }

    }

    return (
        <PaperP>
            <Searchbar
                placeholder="Search"
                // onChangeText={onChangeSearch}
                onChangeText={(event) => searchFilter(event)}
                value={search}
                icon='book-search'
            />
        </PaperP>


    );
};



export default BookSearch;

