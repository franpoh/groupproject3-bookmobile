import React from "react";
import { View, Image } from "react-native";

import styles from "../style_constants/style-sheet";
import colours from "../style_constants/colours";

// const image = require("../assets/splash.png");
const image = require("../assets/p4_logo.png");

const SplashScreen = () => (
  <View style={[styles.container, { backgroundColor: '#F2F2F2' }]}>
    <Image source={image} resizeMode='center'/>
  </View>
);

export default SplashScreen;