import React from "react";
import { View, Image } from "react-native";

import styles from "../style_constants/style-sheet";

const image = require("../assets/splash.png");

const SplashScreen = () => (
  <View style={styles.container}>
    <Image source={image} />
  </View>
);

export default SplashScreen;