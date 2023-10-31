import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SprintList } from './sprint-list';
import { Button } from '../shared-components/button';
import { getSprintData } from '../../services/sprintData';

export const SprintPage = () => {
    const [sprints, setSprints] = useState(getSprintData);

    const deleteSprint = (sprintName: string) => {
        console.log(sprintName);
        setSprints(sprints.filter((a) => a.name !== sprintName));
    };

    return (
        <View style={styles.sprintPage}>
            <SprintList data={sprints} deleteFunction={deleteSprint}></SprintList>
            
            <Button label='+' style={styles.addButton} onClick={() => {}} type='circular'></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    sprintPage: {
        width: '100%',
        flex: 1
      },
    addButton: {
        position:'absolute',
        right: 15,
        bottom: 15,
        alignSelf:'flex-end'
    },
  });