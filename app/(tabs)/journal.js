import React from 'react';
import {Text, View, ScrollView, Button, StyleSheet, FlatList} from 'react-native';

const JOURNALPOSTDATA = [
  {
    id: '1', /*Test data, need to make it so that the user can write posts which get put here*/
    title: 'First Journal Post',
  },
  {
    id: '2',
    title: 'Second Journal Post',
  },
  {
    id: '3',
    title: 'Third Journal Post',
  },
];

const JournalPost = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function JournalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topRowContainer}>
        <Text style={styles.text}>Journal Screen</Text>
        {/*<Button title="Create Post" style={styles.createPostButton}/>*/}
      </View>

      <View>
        <ScrollView>
          <FlatList
            data={JOURNALPOSTDATA}
            renderItem={({item}) => <JournalPost title={item.title} />}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC94A',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    margin: 30,
    fontWeight: 'bold',
  },
  topRowContainer: {
    justifyContent: 'flex-start',
  },
  item: {
    backgroundColor: '#798645',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 32,
  },
});