import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colourBlue } from '../constants';


const Header = () => {
    const data = [];
  
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: colourBlue,
      width: '100%',
      height: 100,
      color: '#000000'
    },
  });

export { Header };