import React, { useState } from "react";
import { Text, View, Alert, ScrollView, TouchableHighlight } from "react-native";
import { Provider as PaperP, DefaultTheme, Card, Title, Paragraph, Divider, Headline, Subheading, List } from 'react-native-paper';
const { v4: uuidv4 } = require('uuid');
import styles from '../../../style_constants/style-sheet'
import colours from "../../../style_constants/colours";
import { useNavigation } from '@react-navigation/native';
import { userB, indexBooks, swap } from '../../../components/test-data';

function generateUploads() {
    
}