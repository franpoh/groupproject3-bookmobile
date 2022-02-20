import { Dimensions, NativeModules } from 'react-native';

const dimensions = {
    deviceHeight: Dimensions.get('window').height,
    deviceWidth: Dimensions.get('window').width
}

export default dimensions;