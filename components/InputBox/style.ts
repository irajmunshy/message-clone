import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 50,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    icons: {
        paddingHorizontal: 5,
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;