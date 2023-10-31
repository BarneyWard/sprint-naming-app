import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colourBlue, colourYellow } from '../../constants';

type buttonProps = {
    label: string,
    style: any,
    onClick: any,
    type: string,
}

export const Button = (props: buttonProps) => {

    return (
        <Pressable style={[(props.type === 'circular') ? styles.circularButton : styles.mainButton, props.style]} onPress={props.onClick}>
            <Text style={(props.type === 'circular') ? styles.circularButtonText : styles.mainButtonText}>{props.label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    circularButton: {
        backgroundColor: colourBlue,
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    circularButtonText: {
        color: colourYellow,
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 15,
    },
    mainButton: {
        backgroundColor: colourYellow,
        height: 40,
        width: 80,
        borderRadius: 10,
    },
    mainButtonText: {
        color: colourBlue,
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 17,
    }
});