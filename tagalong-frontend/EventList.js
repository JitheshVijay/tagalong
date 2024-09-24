import React, { useRef } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, Animated, PanResponder } from 'react-native';

const { width } = Dimensions.get('window');
const SWIPE_THRESHOLD = 120; // Swipe distance to trigger confirmation

const events = [
  {
    id: '1',
    name: 'Diejo Domison',
    image: 'https://example.com/diejo.jpg', // Replace with actual image
    description: 'Tech Meetup at Central Park',
  },
  {
    id: '2',
    name: 'Maria Silva',
    image: 'https://example.com/maria.jpg', // Replace with actual image
    description: 'Art Exhibition Opening',
  },
  {
    id: '3',
    name: 'John Doe',
    image: 'https://example.com/john.jpg', // Replace with actual image
    description: 'Charity Run in Downtown',
  },
];

const EventCard = ({ item }) => {
  const swipeAnim = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dx > 0) {
        swipeAnim.setValue(gestureState.dx);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > SWIPE_THRESHOLD) {
        Animated.timing(swipeAnim, {
          toValue: width,
          duration: 250,
          useNativeDriver: true,
        }).start(() => {
          console.log(`Tagged along with: ${item.name}`);
          swipeAnim.setValue(0);
        });
      } else {
        Animated.spring(swipeAnim, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.swipeContainer} {...panResponder.panHandlers}>
        <Animated.View
          style={[
            styles.swipeButton,
            {
              transform: [
                {
                  translateX: swipeAnim.interpolate({
                    inputRange: [0, SWIPE_THRESHOLD],
                    outputRange: [0, SWIPE_THRESHOLD],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.swipeButtonText}>→</Text>
        </Animated.View>
        <Text style={styles.swipeText}>Tagalong?</Text>
      </View>
    </View>
  );
};

const EventList = () => {
  return (
    <FlatList
      data={events}
      renderItem={({ item }) => <EventCard item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 20,
  },
  card: {
    width: width - 40,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  swipeContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  swipeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeButtonText: {
    color: 'white',
    fontSize: 24,
  },
  swipeText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
});

export default EventList;
