import { StyleSheet } from "react-native";

export const gameStyle = StyleSheet.create({
    back: {
        position: 'absolute',
        width: '110%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#6E6E6EAB"
    },
    modal: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        top: '50%',
        marginHorizontal: '6%'
    },
    gameTypeBtn: {
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 3,
        borderWidth: 1,
        borderColor: '#00f'
    }
}) 