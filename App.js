import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import components
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import UserDiscovery from './components/UserDiscovery';
import ChatInterface from './components/ChatInterface';
import EventDetails from './components/EventDetails';
import EventCreationForm from './components/EventCreationForm';
import EventList from './components/EventList';
import ChatList from './components/ChatList';
import Authentication from './components/Authentication';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';
import NotificationsScreen from './components/NotificationsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home stack (Dashboard, Event Details, etc.)
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="EventDetails" component={EventDetails} />
    <Stack.Screen name="EventCreationForm" component={EventCreationForm} />
  </Stack.Navigator>
);

const DiscoverStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="UserDiscovery" component={UserDiscovery} />
    <Stack.Screen name="UserProfile" component={UserProfile} />
  </Stack.Navigator>
);

const EventsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="EventList" component={EventList} />
  </Stack.Navigator>
);

const ChatStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ChatList" component={ChatList} />
    <Stack.Screen name="ChatInterface" component={ChatInterface} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
  </Stack.Navigator>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {isAuthenticated ? (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Discover') {
                  iconName = focused ? 'people' : 'people-outline';
                } else if (route.name === 'Events') {
                  iconName = focused ? 'calendar' : 'calendar-outline';
                } else if (route.name === 'Chat') {
                  iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                } else if (route.name === 'Profile') {
                  iconName = focused ? 'person' : 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarStyle: {
                backgroundColor: '#1C1C1E', // Black background for bottom navigation
                borderTopColor: '#1C1C1E',  // Remove default top border
              },
              tabBarActiveTintColor: '#8B63E3',  // Purple color for active tabs
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Discover" component={DiscoverStack} />
            <Tab.Screen name="Events" component={EventsStack} />
            <Tab.Screen name="Chat" component={ChatStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Authentication">
              {(props) => <Authentication {...props} setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
