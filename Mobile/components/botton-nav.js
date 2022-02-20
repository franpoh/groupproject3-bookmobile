import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colours from '../style_constants/colours';

import AccountScreen from '../screens/account';
import WishlistScreen from '../screens/wishlist';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/signup';
import BookDetailsScreen from '../screens/book_details';
import BookListScreen from '../screens/book_list';
import UploadBookScreen from '../screens/upload_book';
import UploadReviewScreen from '../screens/upload_review';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Books'
            activeColor={colours.primary}
            labelStyle={{ fontSize: 12 }}
            barStyle={{ backgroundColor: colours.secondaryLight }}
        >
            <Tab.Screen
                name='Books'
                component={BookListScreen}
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
                component={AccountScreen}
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
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
                <Stack.Screen name="Book Details" component={BookDetailsScreen} />
                <Stack.Screen name="Upload Review" component={UploadReviewScreen} />
            </Stack.Navigator>
        </Tab.Navigator>
    )
}

export default MyTabs;

// For Paper's BottomNavigation:
// For integration with React Navigation, you can use react-navigation-material-bottom-tabs and consult createMaterialBottomTabNavigator documentation
// https://reactnavigation.org/docs/material-bottom-tab-navigator/