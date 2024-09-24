import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const categories = [
  { id: '1', name: 'Music' },
  { id: '2', name: 'Art' },
  { id: '3', name: 'Tech' },
  { id: '4', name: 'Sports' },
  { id: '5', name: 'Fashion' },
  { id: '6', name: 'Food' },
];

const upcomingEvents = [
  { id: '1', name: 'Event 1', date: 'Fri, 22 Sep' },
  { id: '2', name: 'Event 2', date: 'Sat, 23 Sep' },
  { id: '3', name: 'Event 3', date: 'Sat, 23 Sep' },
];

const popularEvents = [
  { id: '1', name: 'Popular Event 1', date: 'Fri, 15 Oct' },
  { id: '2', name: 'Popular Event 2', date: 'Sat, 16 Oct' },
  { id: '3', name: 'Popular Event 3', date: 'Sun, 17 Oct' },
];

const Dashboard = ({ navigation }) => {
  const user = {
    username: '@JV4real',
    location: 'location',
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Top Section - User Info, Search, Notification, and Menu */}
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.profileContainer} onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-circle-outline" size={40} color="#8B63E3" />
            <View style={styles.userDetails}>
              <Text style={styles.username}>{user.username}</Text>
              <Text style={styles.location}>{user.location}</Text>
            </View>
          </TouchableOpacity>

          {/* Right-side Icons (Search, Notifications, Menu) */}
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.icon}>
              <Ionicons name="search-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Notifications')}>
              <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Ionicons name="menu-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Browse Events by Category */}
        <Text style={styles.sectionTitle}>Browse Events by Category</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <View key={category.id} style={styles.categoryBox} />
          ))}
        </View>

        {/* Upcoming Events */}
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <FlatList
          horizontal
          data={upcomingEvents}
          renderItem={({ item }) => (
            <View style={styles.eventCard}>
              <Text style={styles.eventDate}>{item.date}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />

        {/* Popular Events */}
        <Text style={styles.sectionTitle}>Popular Events</Text>
        <FlatList
          horizontal
          data={popularEvents}
          renderItem={({ item }) => (
            <View style={styles.eventCard}>
              <Text style={styles.eventDate}>{item.date}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={30} color="#8B63E3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
          <Ionicons name="people-outline" size={30} color="#8B63E3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Events')}>
          <Ionicons name="calendar-outline" size={30} color="#8B63E3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubble-outline" size={30} color="#8B63E3" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetails: {
    marginLeft: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B63E3',
  },
  location: {
    fontSize: 12,
    color: '#8B63E3',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#C5E384', // Bright green for section titles
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  categoryBox: {
    width: (width - 60) / 3,
    height: 100,
    backgroundColor: '#8B63E3', // Same purple color for category boxes
    marginBottom: 10,
    borderRadius: 10,
  },
  eventCard: {
    width: 120,
    height: 160,
    backgroundColor: '#A5A5A5',
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventDate: {
    color: '#C5E384', // Green color for event date text
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1C1C1E',
    borderTopWidth: 1,
    borderTopColor: '#2E2E2E',
  },
});

export default Dashboard;
