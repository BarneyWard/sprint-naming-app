import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { colourBlue, colourYellow } from '../../constants';

type sprintListProps = {
    data: any,
};

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
                    <Pressable style={styles.deleteButton} onPress={() =>{}}>
                        <Text style={styles.deleteButtonText}>{'Delete'}</Text>
                    </Pressable>
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