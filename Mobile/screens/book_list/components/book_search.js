import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList, Image, View, TouchableOpacity, TextInput } from 'react-native';
import { List, Text, Searchbar, Provider as PaperP } from "react-native-paper";
import { userA, indexBooks, swap } from '../../../components/test-data';
import { useNavigation } from '@react-navigation/native';
import image from '../../../assets/logo.png'

function BookSearch() {

    const [search, setSearch] = React.useState('');
    const [filteredData, setFilteredData] = React.useState([]);
    const localIndexBooks = indexBooks;
    const [data, setData] = React.useState(indexBooks);

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShadowVisible: true,
            headerTitle: "Book Loop",
            headerSearchBarOptions: {
                placeholder: "Search books",
                onChangeText: (event) => {
                    searchFilter(event.nativeEvent.text);
                }
            },
        });
    }, [navigation]);

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
            setData(localIndexBooks);
            setSearch(text);
        }
    }

    return (
        <ScrollView>
            {search ? (filteredData.map((element => {
                return (
                    <View key={element.indexId} style={{ margin: 1 }}>
                        <View>
                            <List.Item
                                left={props => (
                                    <Image {...props}
                                        style={{ width: 66, height: 95 }}
                                        source={element.imageURL}
                                    />
                                )}
                                title={element.title}
                                description={element.author}
                                onPress={() => navigation.navigate("Book Details", { screen: "Book Details" })}
                            />
                        </View>
                    </View>
                )
            }))
            ) :
                (localIndexBooks.map((element => {
                    return (
                        <View key={element.indexId} style={{ margin: 1 }}>
                            <View>
                                <List.Item
                                    left={props => (
                                        <Image {...props}
                                            style={{ width: 66, height: 95 }}
                                            source={element.imageURL}
                                        />
                                    )}
                                    title={element.title}
                                    description={element.author}
                                    onPress={() => navigation.navigate("Book Details", { screen: "Book Details" })}
                                />
                            </View>
                        </View>
                    )
                }))
                )}
        </ScrollView>
    )

};



export default BookSearch;

