import React from 'react';
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colours from './style_constants/colours';

import AccountScreen from './screens/account';
import WishlistScreen from './screens/wishlist';
import LoginScreen from './screens/login';
import SignUpScreen from './screens/signup';
import BookDetailsScreen from './screens/book_details';
import BookListScreen from './screens/book_list';
import UploadBookScreen from './screens/upload_book';
import UploadReviewScreen from './screens/upload_review';

const Stack = createNativeStackNavigator();

// Issue: When native stacks are nested inside material bottom tabs navigator (react-navigation), navigating between tabs back and forth causes a blank screen to appear.
// Workaround: https://github.com/software-mansion/react-native-screens/issues/1197#issuecomment-993682256
// Will probably be fixed in the future

const AccountStack = () => {
    return (
        <View style={{flex: 1}} collapsable={false}>
            <Stack.Navigator
                initialRouteName='AccountPage'
            >
                <Stack.Screen name="AccountPage" component={AccountScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
            </Stack.Navigator>
        </View>
    )
}

const BookStack = () => {
    return (
        <View style={{flex: 1}} collapsable={false}>
            <Stack.Navigator
                initialRouteName='Books'
            >
                <Stack.Screen name="Book List" component={BookListScreen} />
                <Stack.Screen name="Book Details" component={BookDetailsScreen} />
                <Stack.Screen name="Upload Review" component={UploadReviewScreen} />
            </Stack.Navigator>
        </View>
    )
}

// For Paper's BottomNavigation:
// For integration with React Navigation, you can use react-navigation-material-bottom-tabs and consult createMaterialBottomTabNavigator documentation
// https://reactnavigation.org/docs/material-bottom-tab-navigator/

const Tab = createMaterialBottomTabNavigator();

// Handling nesting bottom navigation
// https://reactnavigation.org/docs/nesting-navigators/

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Books'
            activeColor={colours.primary}
            labelStyle={{ fontSize: 12 }}
            barStyle={{ backgroundColor: colours.secondaryLight }}
        >
            <Tab.Screen
                name='Books'
                component={BookStack}
                options={{
                    tabBarLabel: 'Books',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name='bookshelf'
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Wishlist'
                component={WishlistScreen}
                options={{
                    tabBarLabel: 'Wishlist',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name='heart'
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='UploadBook'
                component={UploadBookScreen}
                options={{
                    tabBarLabel: 'Upload Book',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name='book-plus'
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Account'
                component={AccountStack}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name='account'
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

// Future Implementation
// Handling permission in routes with Group
// https://reactnavigation.org/docs/group/

// <Stack.Navigator>
//   {isLoggedIn ? (
//     // Screens for logged in users
//     <Stack.Group>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Profile" component={Profile} />
//     </Stack.Group>
//   ) : (
//     // Auth screens
//     <Stack.Group screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="SignIn" component={SignIn} />
//       <Stack.Screen name="SignUp" component={SignUp} />
//     </Stack.Group>
//   )}
//   {/* Common modal screens */}
//   <Stack.Group screenOptions={{ presentation: 'modal' }}>
//     <Stack.Screen name="Help" component={Help} />
//     <Stack.Screen name="Invite" component={Invite} />
//   </Stack.Group>
// </Stack.Navigator>
