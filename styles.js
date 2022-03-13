import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    areaHeader: {
        width: '100%',
        height: 80,
        backgroundColor: '#2e1cd4',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17
    },
    header: {
        fontWeight: 'bold',
        color: '#4b7199',
        fontSize: 40,
        marginBottom: 30,
        top: 20
    },
    textBox: {
        width: 300,
        height: 50,
        borderColor: '#191970',
        borderWidth: 1,
        textAlign: 'left',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 25,
        fontSize: 20,
    },
    text: {
        fontWeight: 'bold',
        color: '#455a64',
        fontSize: 25,
        marginBottom: 5,
    },
    shadow: {
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
    },
    areaBtn: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    btn: {
        width: '30%',
        height: 60,
        backgroundColor: '#110f61',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtn: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    }
});


export default styles;