import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
  const user = {
    username: '@JV4real',
    name: 'Jithesh',
    profilePicture: 'https://example.com/jithesh.jpg', // Replace with actual image URL
    bio: 'This is the coolest caption I could think of',
    friends: 30,
    connects: 12,
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Top Section - Username, Profile Picture, and Info */}
        <View style={styles.topSection}>
          <View style={styles.userInfo}>
            <Text style={styles.username}>{user.username}</Text>
            <Image source={{ uri: user.profilePicture }} style={styles.profilePic} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.bio}>{user.bio}</Text>

            {/* Friends and Connects */}
            <View style={styles.socialInfo}>
              <Text style={styles.socialText}>
                <Text style={styles.number}>{user.friends}</Text> friends
              </Text>
              <Text style={styles.socialText}>
                <Text style={styles.number}>{user.connects}</Text> connects
              </Text>
            </View>
          </View>
          {/* Menu Icon */}
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
            <Ionicons name="menu" size={30} color="white" />
          </TouchableOpacity>
        </View>

        {/* Profile Content - Image and Map View */}
        <View style={styles.gridSection}>
          <View style={styles.gridItem}>
            <Image
              source={{ uri: 'https://example.com/jithesh-photo.jpg' }} // Replace with actual image
              style={styles.image}
            />
          </View>
          <View style={styles.gridItem}>
            {/* Placeholder for Map (you can add a real map using react-native-maps) */}
            <View style={styles.mapPlaceholder}>
              <Ionicons name="location" size={60} color="white" />
            </View>
          </View>
        </View>

        {/* Extra Content or Post Section */}
        <View style={styles.extraSection}>
          <View style={styles.postPlaceholder} />
          <View style={styles.postPlaceholderSecondary} />
        </View>
      </ScrollView>

      {/* Bottom Navigation (Without Extra Profile Icon) */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={30} color="#8B63E3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
          <Ionicons name="people-outline" size={30} color="#8B63E3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubble-outline" size={30} color="#8B63E3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={30} color="#8B63E3" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E', // Dark background color
  },
  topSection: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    position: 'relative',
  },
  userInfo: {
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B63E3', // Bright purple color
    marginBottom: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#8B63E3',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#A1A1A1',
    marginVertical: 8,
  },
  socialInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  socialText: {
    fontSize: 18,
    color: '#8B63E3',
  },
  number: {
    fontWeight: 'bold',
    color: '#8B63E3',
    fontSize: 20,
  },
  menuButton: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  gridSection: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#2E2E2E',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E2E2E',
  },
  extraSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  postPlaceholder: {
    height: 100,
    backgroundColor: '#A5A5A5',
    borderRadius: 10,
    marginBottom: 20,
  },
  postPlaceholderSecondary: {
    height: 100,
    backgroundColor: '#B35A5A',
    borderRadius: 10,
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

export default ProfileScreen;
