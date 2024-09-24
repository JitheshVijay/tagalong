// components/SwipableCard.js

import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const SwipableCard = ({ event, onSwipeRight }) => {
  return (
    <Swipeable
      renderLeftActions={() => (
        <View style={styles.swipeAction}>
          <Text style={styles.swipeText}>Swipe Right to Tag Along</Text>
        </View>
      )}
      onSwipeableLeftOpen={onSwipeRight}
    >
      <View style={styles.card}>
        <Image source={{ uri: event.image }} style={styles.image} />
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>Date: {event.date}</Text>
        <Text style={styles.location}>Location: {event.location}</Text>
        <Text style={styles.description}>{event.description}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width - 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  location: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  swipeAction: {
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
  },
  swipeText: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 20,
  },
});

export default SwipableCard;
