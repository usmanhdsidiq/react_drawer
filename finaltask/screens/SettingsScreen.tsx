import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  }

    return (
        <View style={styles.container}>
            <Button title='Logout' onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
    },
});

export default SettingsScreen;