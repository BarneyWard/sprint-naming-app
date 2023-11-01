import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import {colourBlue, colourYellow} from '../constants';
import {Button} from "./shared-components/button";
import { UseSprints } from '../hooks/use-sprints';


export const AddSprintPage = () => {
    const { getSprints, setSprints } = UseSprints();

    return (
        <View>
            <Text>Name</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Start Date</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>End Date</Text>
            <TextInput style={styles.input}></TextInput>
            <Button label='Add Sprint' onClick={() => {}} type='primary'></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 20,
        borderWidth: 1,
        padding: 20,
        color: colourBlue,
        backgroundColor: colourYellow,
        fontSize: 20,
    },

});
