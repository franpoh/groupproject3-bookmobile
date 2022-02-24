import React from 'react';
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colours from './style_constants/colours';
import AuthContext from './context';

import AccountScreen from './screens/account';
import WishlistScreen from './screens/wishlist';
import LoginScreen from './screens/login';
import SignUpScreen from './screens/signup';
import BookDetailsScreen from './screens/book_details';
import BookListScreen from './screens/book_list';
import UploadBookScreen from './screens/upload_book';
import UploadReviewScreen from './screens/upload_review';
import SplashScreen from './components/splash';

// Issue: When native stacks are nested inside material bottom tabs navigator (react-navigation), navigating between tabs back and forth causes a blank screen to appear.
// Workaround: https://github.com/software-mansion/react-native-screens/issues/1197#issuecomment-993682256
// Will probably be fixed in the future

const GeneralStack = createNativeStackNavigator();

const GeneralStackScreen = () => {    

    return (
        <View style={{ flex: 1 }} collapsable={false}>
            <GeneralStack.Navigator
                initialRouteName='Books'
            >
                <GeneralStack.Screen name="Book Loop" component={BookListScreen} />
                <GeneralStack.Screen 
                    name="Book Details" 
                    component={BookDetailsScreen}
                    screenOptions={{
                        headerShown: false
                    }} />
            </GeneralStack.Navigator>
        </View>
    )
}

const UploadStack = createNativeStackNavigator();

const UploadStackScreen = () => {
    return (
        <View style={{ flex: 1 }} collapsable={false}>
            <UploadStack.Navigator
                initialRouteName='Upload Book'
                screenOptions={{
                    headerShown: false
                }}
            >
                <UploadStack.Screen name='Upload Book' component={UploadBookScreen} />
                <UploadStack.Screen name="Upload Review" component={UploadReviewScreen} />
            </UploadStack.Navigator>
        </View>

)};


// For Paper's BottomNavigation:
// For integration with React Navigation, you can use react-navigation-material-bottom-tabs and consult createMaterialBottomTabNavigator documentation
// https://reactnavigation.org/docs/material-bottom-tab-navigator/

// Handling nesting bottom navigation
// https://reactnavigation.org/docs/nesting-navigators/

const RootStack = createMaterialBottomTabNavigator();

const RootStackScreen = ({ userToken }) => {
    return (
        <RootStack.Navigator
            initialRouteName='Books'
            activeColor={colours.primary}
            labelStyle={{ fontSize: 12 }}
            barStyle={{ backgroundColor: colours.secondaryLight }}
        >
            <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                <RootStack.Screen
                    name='Book List'                    
                    component={GeneralStackScreen}
                    initialParams={{ userToken: userToken }}
                    options={{
                        tabBarLabel: 'Book List',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name='bookshelf'
                                color={color}
                                size={26}
                            />
                        ),
                    }}
                />
            </RootStack.Group>
            {userToken ? (
                <RootStack.Group>
                    <RootStack.Screen
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

                    <RootStack.Screen
                        name='Book Upload'
                        component={UploadStackScreen}
                        options={{
                            tabBarLabel: 'Book Upload',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons
                                    name='book-plus'
                                    color={color}
                                    size={26}
                                />
                            ),
                        }}
                    />

                    <RootStack.Screen
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
                </RootStack.Group>
            ) : (
                <RootStack.Group>
                    <RootStack.Screen
                        name='Login'
                        component={LoginScreen}
                        options={{
                            tabBarLabel: 'Login',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons
                                    name='account'
                                    color={color}
                                    size={26}
                                />
                            ),
                        }}
                    />

                    <RootStack.Screen
                        name='Sign Up'
                        component={SignUpScreen}
                        options={{
                            tabBarLabel: 'Sign Up',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons
                                    name='account-plus'
                                    color={color}
                                    size={26}
                                />
                            ),
                        }}
                    />
                </RootStack.Group>
            )}
        </RootStack.Navigator>
    )
}

// Handling permission in routes with Group
// https://reactnavigation.org/docs/group/

export default function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    const authContext = { // can be wrapped with useMemo, but we want 'user' to refresh
        signIn: () => {
            setIsLoading(false);
            setUserToken("mellon");
        },
        signUp: () => {
            setIsLoading(false);
            setUserToken("mellon");
        },
        signOut: () => {
            setIsLoading(false);
            setUserToken(null);
        },
        user: userToken,
    }

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [])

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <AuthContext.Provider value={authContext} >
            <NavigationContainer>
                <RootStackScreen userToken={userToken} />
            </NavigationContainer>
        </AuthContext.Provider>
    )
}


