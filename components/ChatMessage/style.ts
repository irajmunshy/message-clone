import Colors from '../../constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    messageBox: {
        borderRadius: 5,
        padding: 10,
    },
    name: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    message: {
        
    },
    time: {
        alignSelf: 'flex-end',
        color: 'gray'
    },
});

export default styles;