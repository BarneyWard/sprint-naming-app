import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { colourBlue, colourYellow } from '../../constants';
import { Button } from '../shared-components/button';

type sprintListProps = {
    data: any,
    deleteFunction: (name: string) => void,
}

export const SprintList = (props: sprintListProps) => {
    const currentTime = new Date();

    return (
        <FlatList
            scrollEnabled
            style={styles.sprintList}
            data={props.data}
            renderItem={({ item }) => {
                return (
                <View style={styles.sprintListItem}>
                    <View style={styles.sprintListItemHeader}>
                        <Text style={styles.sprintListItemTitle}>{item.name}</Text>
                        <Text style={styles.sprintListItemCurrent}>{(item.startDate <= currentTime && item.endDate >= currentTime) ? 'Current' : ''}</Text>
                    </View>
                    <Text>{item.startDate.toDateString() + ' - ' + item.endDate.toDateString()}</Text>
                    <Button label='Delete' style={styles.deleteButton} onClick={ () => props.deleteFunction(item.name) } type='primary'></Button>
                </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    sprintList: {
      width: '100%',
      //backgroundColor: '#f54e42',
    },
    sprintListItem: {
        padding: '3%',
        borderWidth: 1,
        borderColor: '#000000',
    },
    sprintListItemHeader: {
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'row',
    },
    sprintListItemTitle: {
        fontSize: 30,
    },
    sprintListItemCurrent: {
        flex: 1,
    },
    deleteButton: {
        position:'absolute',
        right: 15,
        bottom: 15,
        alignSelf:'flex-end'
    },
  });