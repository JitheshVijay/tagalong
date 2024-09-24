import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ChatList = ({ navigation }) => {
  const chats = [
    { id: '1', name: 'Alice Johnson', lastMessage: 'Hey, how are you?' },
    { id: '2', name: 'Bob Smith', lastMessage: 'See you at the event!' },
    { id: '3', name: 'Charlie Brown', lastMessage: 'Thanks for the invite.' },
  ];

  const renderChat = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatInterface', { chatId: item.id, name: item.name })}
    >
      <Text style={styles.chatName}>{item.name}</Text>
      <Text>{item.lastMessage}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={renderChat}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chatItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatList;
