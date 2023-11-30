import {  TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button() {
    return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Mini curso</Text>
    </TouchableOpacity>
    
    )
};

const styles = StyleSheet.create({
    button: {
        width: 130,
        height: 30,
        backgroundColor: "#ffff",
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: 'black'
    }
});