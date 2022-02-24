import * as React from 'react';
import { Button } from 'react-native-paper';

import colours from '../style_constants/colours';

const MyButton = ({ text, buttonAction, propStyle }) => {
    return (
        <Button 
            mode="contained" 
            color={colours.secondaryLight}
            onPress={buttonAction}
            style={propStyle}
        >
            {text}
        </Button>
    )
}

export default MyButton;
