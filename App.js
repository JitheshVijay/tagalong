import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import components
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import UserDiscovery from './components/UserDiscovery';
import ChatInterface from './components/ChatInterface';
import EventDetails from './components/EventDetails';
import EventCreationForm from './components/EventCreationForm';
import EventList from './components/EventList';
import ChatList from './components/ChatList';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="EventDetails" component={EventDetails} />
    <Stack.Screen name="EventCreationForm" component={EventCreationForm} />
  </Stack.Navigator>
);

const DiscoverStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="UserDiscovery" component={UserDiscovery} />
    <Stack.Screen name="UserProfile" component={UserProfile} />
  </Stack.Navigator>
);

const EventsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="EventList" component={EventList} />
    <Stack.Screen name="EventDetails" component={EventDetails} />
    <Stack.Screen name="EventCreationForm" component={EventCreationForm} />
  </Stack.Navigator>
);

const ChatStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ChatList" component={ChatList} />
    <Stack.Screen name="ChatInterface" component={ChatInterface} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
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
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Discover" component={DiscoverStack} />
        <Tab.Screen name="Events" component={EventsStack} />
        <Tab.Screen name="Chat" component={ChatStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}