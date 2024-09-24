import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatInterface = ({ route }) => {
  const { chatId, name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with {name}</Text>
      <Text>Chat ID: {chatId}</Text>
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ChatInterface;
