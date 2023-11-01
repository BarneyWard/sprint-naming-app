import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SprintList } from './sprint-list';
import { Button } from '../shared-components/button';
import { UseSprints } from '../../hooks/use-sprints';
import { Sprint } from '../../types';

export const SprintPage = () => {
    const [sprintPageList, setSprintPageList] = useState<Sprint[]>([]);
    const { getSprints, setSprints } = UseSprints();

    useEffect(() => {
        const sprints = getSprints();
        setSprintPageList(sprints);
    },[]);

    const deleteSprint = (sprintName: string) => {
        setSprintPageList(sprintPageList.filter((a) => a.name !== sprintName));
        setSprints(sprintPageList);
    };

    return (
        <View style={styles.sprintPage}>
            <SprintList data={sprintPageList} deleteFunction={deleteSprint}></SprintList>

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