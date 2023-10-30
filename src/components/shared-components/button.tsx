import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colourBlue, colourYellow } from '../../constants';

type buttonProps = {
    label: string,
    style: any,
    function: any,
}

export const Button = (props: buttonProps) => {

    return (
        <Pressable style={[styles.button, props.style]} onPress={props.function}>
            <Text style={styles.buttonText}>{props.label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colourBlue,
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    buttonText: {
        color: colourYellow,
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 15,
    },
    deleteButton: {
        backgroundColor: colourYellow,
        height: 40,
        width: 80,
        borderRadius: 10,
        position:'absolute',
        right: 15,
        bottom: 15,
        alignSelf:'flex-end'
    },
    deleteButtonText: {
        color: colourBlue,
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 17,
    }
});