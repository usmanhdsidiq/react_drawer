import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useItems } from "../ItemsContext";

const DetailsScreen: React.FC = () => {
    // const route = useRoute<DetailScreenRouteProp>();
    // const navigation = useNavigation<DetailScreenNavigationProp>();
    const { items, deleteItem } = useItems();
    const navigation = useNavigation();

    const handleEdit = (index: number, item: string) => {
        navigation.navigate('Home', {editIndex: index, editItem: item});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>All Items</Text>
            {items.length > 0 ? (
                <FlatList data={items} keyExtractor={(item, index) => index.toString()} renderItem={({item, index}) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item}</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Edit" onPress={() => handleEdit(index, item)} />
                            <Button title="Delete" onPress={() => deleteItem(index)} />
                        </View>
                    </View>
                    )} />
                ) : (
                    <Text>There's no items yet, please add it from the HomeScreen.</Text>
            )}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        width: 250,
        padding: 10,
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 16,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 8,
    },
});

export default DetailsScreen;