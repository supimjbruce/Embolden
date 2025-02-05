import {Text, View, StyleSheet, Button, Image} from 'react-native';
import React from 'react';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <View>
        <Image></Image> {/* Profile photo */}
      </View>
      <View>
        <Text>Username</Text> {/* Username */}
      </View>
      <View> {/*Profile Details Container*/}
        <View>
          <Text>Current Mission</Text> {/*Current mission*/}
          <Text>Description</Text>
        </View>
        <View>
          <Text>Past Missions</Text> {/*Past missions*/}
        </View>
        <View>
          <Text>About Me</Text> {/*About me section*/}
          <Text>Bio</Text>
        </View>
        <Button>Friends List</Button> {/*Friends List Button*/}
        <Button>Update Profile</Button> {/*Update Profile Button*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
