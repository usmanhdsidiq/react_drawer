import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerScreenNavigationProp } from "../types";
import { useItems } from "../ItemsContext";

// type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

const HomeScreen: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const {items, addItem, deleteItem, editItem} = useItems();
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const navigation = useNavigation();
    const route = useRoute();

  useEffect(() => {
    if (route.params?.editIndex !== undefined && route.params?.editItem !== undefined) {
      setEditingIndex(route.params.editIndex);
      setInputText(route.params.editItem);
      navigation.setParams({ editIndex: undefined, editItem: undefined});
    }
  }, [route.params]);

  const handleAddItem = () => {
    if(inputText.trim() !== '') {
      if(editingIndex !== null) {
        editItem(editingIndex, inputText.trim());
        setEditingIndex(null);
      } else {
        addItem(inputText.trim());
      }
      setInputText('');
    }
  };

  const handleEditItem = (index: number) => {
    setInputText(items[index]);
    setEditingIndex(index);
  };

  // const newestItems = items.slice(-5);

  return (
    <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Notes</Text>
          <Image source={require('../assets/notes.png')} style={styles.image} />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Add or Edit an Item</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value={inputText} onChangeText={setInputText} placeholder="Enter an item" />
            <Button title={editingIndex !== null ? 'Save' : 'Add'} onPress={handleAddItem} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Your Items</Text>
          {items.length > 0 ? (
            <FlatList data={items.slice(0, 5)} keyExtractor={(item, index) => index.toString()} renderItem={({ item, index }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item}</Text>
                <View style={styles.buttonContainer}>
                  <Button title="Edit" onPress={() => handleEditItem(index)} />
                  <Button title="Delete" onPress={() => deleteItem(index)} />
                </View>
              </View>
            )} />
          ) : (
            <Text>There's no item, please add an item first.</Text>
          )}
          
        </View>
    </View>
  );

    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
      },
      section: {
        width: 250,
        marginBottom: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
      },
      image: {
        width: 150,
        height: 150,
        marginTop: 5,
        padding: 5,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },
      input: {
        flex: 1,
        height: 50,
        width: 200,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginRight: 10,
      },
    itemContainer: {
        height: 100,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
      itemText: {
        fontSize: 16,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 8,
      },
});

export default HomeScreen;