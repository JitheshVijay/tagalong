import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = ({ navigation }) => {
  const user = {
    name: 'John Doe',
    profilePicture: 'https://example.com/johndoe.jpg',
    bio: 'Loves attending events and meeting new people.',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profilePicture }} style={styles.profilePic} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    textAlign: 'center',
  },
});

export default UserProfile;


