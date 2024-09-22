import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventDetails = ({ route }) => {
  const event = {
    title: 'Tech Meetup',
    date: '2024-10-15',
    time: '18:00',
    location: 'Tech Hub, 456 Innovation St',
    description: 'Join us for an evening of networking and tech talks!',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text>Date: {event.date}</Text>
      <Text>Time: {event.time}</Text>
      <Text>Location: {event.location}</Text>
      <Text style={styles.description}>{event.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginTop: 10,
  },
});

export default EventDetails;
