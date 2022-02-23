import React, { useState } from "react";
import { ScrollView, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Text, List, Card, Title, Paragraph, Provider as PaperP } from 'react-native-paper';
import styles from "../../style_constants/style-sheet";
import MyButton from "../../components/button";
import { useNavigation } from '@react-navigation/native';
import { userA, indexBooks, swap } from '../../components/test-data';


// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
// https://reactnavigation.org/docs/connecting-navigation-prop/
function GetBooks() {
    const navigation = useNavigation();
    let localIndexBooks = indexBooks;
    let localSwapBooks = swap;

    return localIndexBooks.map((element => {
        return (
            <View key={element.indexId} style={{ margin: 10 }}>
                {/* <Text>{element.title}</Text>
                <Text>{element.author}</Text> */}
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
    // #region manual entry
    // return (
    //     <PaperP>
    //         <View style={styles.booksContainer} >
    //             <List.Section>
    //                 <List.Item
    //                     left={props => (
    //                         <Image {...props}
    //                             style={{ width: 66, height: 95 }}
    //                             source={{
    //                                 uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
    //                             }}
    //                         />
    //                     )}
    //                     title="List item 1"
    //                     description="Describes item 1. Example of a very very long description."
    //                     onPress={() => navigation.navigate("Book Details", { screen: "Book Details" })}
    //                 />
    //                 <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
    //                     <MyButton
    //                         text="Book Details"
    //                         buttonAction={
    //                             () => {
    //                                 navigation.navigate("Book Upload", { screen: 'Book Details' });
    //                             }
    //                         }
    //                     />
    //                     <MyButton
    //                         text="Buy"
    //                         buttonAction={
    //                             () => {
    //                                 Alert.alert(
    //                                     'Placeholder',
    //                                     "Book has been purchased",
    //                                     [
    //                                         { text: "OK" }
    //                                     ]
    //                                 )
    //                             }
    //                         }
    //                     />
    //                 </View>

    //                 {/* <TouchableOpacity onPress={() => navigation.navigate("Book Upload", { screen: "Book Details" })}>
    //                     <Card mode='outlined'>
    //                         <Card.Cover source={{
    //                             uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
    //                         }} />
    //                         <Card.Title title="<Book Title>" />
    //                         <Card.Content>
    //                             <Paragraph>
    //                                 /..Abstract../
    //                             </Paragraph>
    //                         </Card.Content>
    //                     </Card>
    //                 </TouchableOpacity> */}

    //                 <List.Item
    //                     left={() => (
    //                         <Image
    //                             style={{ width: 66, height: 95 }}
    //                             source={{
    //                                 uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
    //                             }}
    //                         />
    //                     )}
    //                     title="List item 2"
    //                     description="Describes item 2. Example of a very very long description."
    //                 />
    //                 <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
    //                     <MyButton
    //                         text="Book Details"
    //                         buttonAction={
    //                             () => {
    //                                 navigation.navigate("Book Upload", { screen: 'Book Details' });
    //                             }
    //                         }
    //                     />
    //                     <MyButton
    //                         text="Buy"
    //                         buttonAction={
    //                             () => {
    //                                 Alert.alert(
    //                                     'Placeholder',
    //                                     "Book has been purchased",
    //                                     [
    //                                         { text: "OK" }
    //                                     ]
    //                                 )
    //                             }
    //                         }
    //                     />
    //                 </View>


    //                 <List.Item
    //                     left={() => (
    //                         <Image
    //                             style={{ width: 66, height: 95 }}
    //                             source={{
    //                                 uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
    //                             }}
    //                         />
    //                     )}
    //                     title="List item 2"
    //                     description="Describes item 2. Example of a very very long description."
    //                 />
    //                 <List.Item
    //                     left={() => (
    //                         <Image
    //                             style={{ width: 66, height: 95 }}
    //                             source={{
    //                                 uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
    //                             }}
    //                         />
    //                     )}
    //                     title="List item 2"
    //                     description="Describes item 2. Example of a very very long description."
    //                 />
    //                 <List.Item
    //                     left={() => (
    //                         <Image
    //                             style={{ width: 66, height: 95 }}
    //                             source={{
    //                                 uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
    //                             }}
    //                         />
    //                     )}
    //                     title="List item 2"
    //                     description="Describes item 2. Example of a very very long description."
    //                 />
    //                 <List.Item
    //                     left={() => (
    //                         <Image
    //                             style={{ width: 66, height: 95 }}
    //                             source={{
    //                                 uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
    //                             }}
    //                         />
    //                     )}
    //                     title="List item 2"
    //                     description="Describes item 2. Example of a very very long description."
    //                 />
    //             </List.Section>
    //         </View>
    //     </PaperP>
    // )
    // #endregion manual entry
}

export default GetBooks;