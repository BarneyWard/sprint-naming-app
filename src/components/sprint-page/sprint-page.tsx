import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { SprintList } from './sprint-list';
import { colourBlue, colourYellow } from '../../constants';
import { Button } from '../shared-components/button';

const sprints = [
    {
        name: "Sprint 8",
        startDate: new Date('2023-10-01T0:00:00'),
        endDate: new Date('2023-10-31T0:00:00'),
    },
    {
name: "Sprint 7",
startDate: new Date('2023-01-01T0:00:00'),
endDate: new Date('2023-01-30T0:00:00'),
},
{
name: "Sprint 6",
startDate: new Date('2023-01-01T0:00:00'),
endDate: new Date('2023-01-30T0:00:00'),
},
{
name: "Sprint 5",
startDate: new Date('2023-01-01T0:00:00'),
endDate: new Date('2023-01-30T0:00:00'),
},
{
name: "Sprint 4",
startDate: new Date('2023-01-01T0:00:00'),
endDate: new Date('2023-01-30T0:00:00'),
},
{
name: "Sprint 3",
startDate: new Date('2023-01-01T0:00:00'),
endDate: new Date('2023-01-30T0:00:00'),
},
{
name: "Sprint 2",
startDate: new Date('2023-01-01T0:00:00'),
endDate: new Date('2023-01-30T0:00:00'),
},
{
name: "Sprint 1",
startDate: new Date('2023-01-01T0:00:00'),
endDate: new Date('2023-01-30T0:00:00'),
},
{
name: "Sprint 0",
startDate: new Date('2023-01-01T0:00:00'),
endDate: new Date('2023-01-30T0:00:00'),
}
];

export const SprintPage = () => {
  
    return (
        <View style={styles.sprintPage}>
            <SprintList data={sprints}></SprintList>
            
            <Button label='+' style={styles.addButton} function={() => {}}></Button>
        </View>
    );
};

/*<Pressable style={styles.addButton} onPress={() =>{}}>
                <Text style={styles.addButtonText}>{'+'}</Text>
            </Pressable>*/

const styles = StyleSheet.create({
    sprintPage: {
        width: '100%',
        flex: 1
      },
    addButton: {
        /*backgroundColor: colourBlue,
        height: 50,
        width: 50,
        borderRadius: 50,*/
        position:'absolute',
        right: 15,
        bottom: 15,
        alignSelf:'flex-end'
    },
  });