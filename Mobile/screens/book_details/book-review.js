import React from "react";
import { Text, View, Alert, TouchableHighlight } from "react-native";
import { Dialog, TextInput, Portal } from 'react-native-paper';
import { v4 as uuidv4 } from 'uuid';

import MyButton from "../../components/button";
import styles from "../../style_constants/style-sheet";
import colours from "../../style_constants/colours";

import { uploadedReviews } from '../../components/test-data';
import AuthContext from "../../context";

// Community Reviews
function ReviewList({ reviewList }) {
    return reviewList.map((review) => {
        return (
            <View style={{ marginBottom: 10 }} key={uuidv4()} >
                <Text >"{review}"</Text>
            </View>
        )
    })
}

// Pop-up dialog box to write review
function ReviewDialog({ dialogVisible, setDialogVisible, review, setReview, setReviewList }) {
    return (
        <View>
            <Portal>
                <Dialog
                    visible={dialogVisible}
                    onDismiss={() => setDialogVisible(false)}
                >
                    <Dialog.Title>Upload a Review</Dialog.Title>
                    <Dialog.Content>
                        <TextInput
                            style={[styles.textBox, styles.textNormal]}
                            underlineColor={colours.baseDark}
                            activeUnderlineColor={colours.primary}
                            value={review}
                            onChangeText={text => setReview(text)}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <MyButton
                            text="Submit"
                            buttonAction={
                                () => {
                                    Alert.alert(
                                        'Upload a Review',
                                        "Your review has been uploaded",
                                        [
                                            { text: "OK" }
                                        ]
                                    );
                                    uploadedReviews.push(review);
                                    setReviewList(uploadedReviews);
                                    setReview("");
                                    setDialogVisible(false);
                                }
                            }
                        />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}

// Upload Review Button
function UploadReviewButton({ setDialogVisible }) {
    const { user } = React.useContext(AuthContext);

    return (
        <View>
            <TouchableHighlight
                style={[styles.rowSpaceBtwn, {
                    flex: 1,
                    backgroundColor: colours.secondaryLight,
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: colours.secondaryLight,
                    marginBottom: 10,
                }]}
                onPress={() => {
                    if (user != null) {
                        console.log("TEST")
                        setDialogVisible(true);
                    };
                }}>
                <Text>UPLOAD A REVIEW</Text>
            </TouchableHighlight>
        </View>
    )
};

export {
    ReviewList,
    UploadReviewButton,
    ReviewDialog,
};

