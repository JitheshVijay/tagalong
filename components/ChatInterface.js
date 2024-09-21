import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button
        title="View Profile"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <Button
        title="Chat"
        onPress={() => navigation.navigate('ChatInterface')}
      />
      <Button
        title="Create Event"
        onPress={() => navigation.navigate('EventCreationForm')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Dashboard;
