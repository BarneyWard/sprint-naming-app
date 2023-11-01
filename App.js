import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/header';
import { SprintPage } from './src/components/sprint-page/sprint-page';
import { AddSprintPage } from "./src/components/add-sprint-page";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <SprintPage></SprintPage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
