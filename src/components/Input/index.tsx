import { TextInput, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

export default function InputComponent() {

    const [text, setText] = useState("Qualquer texto");

    useEffect(() => {
        console.log(text);
    }, [text]);

    return <TextInput style={styles.input} value={text} onChangeText={setText} placeholder="digite sua tarefa" />;
};

const styles = StyleSheet.create({
    input: {
        width: 130,
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15,
        paddingLeft:10,
    },
    textInput: {
        color: 'black'
    }
});