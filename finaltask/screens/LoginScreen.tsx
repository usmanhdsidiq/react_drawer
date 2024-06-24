import React, { useState } from "react";
import { View, TextInput, Text, Image, Button, ToastAndroid, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../types";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<LoginScreenNavigationProp['navigation']>({});

    const loginCheck = () => {
        const x = "root";
        const y = "root";

        if ((username === x) && (password === y)) {
            navigation.navigate('Main');
        } else {
            ToastAndroid.show('Wrong username or password.',ToastAndroid.SHORT);
        }
    };

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Login</Text>
                <Image style={styles.image} source={require('../assets/lock.png')} />
                <TextInput style={styles.input} placeholder="Username" onChangeText={text => setUsername(text)} value={username} />
                <TextInput style={styles.input} placeholder="Password" onChangeText={text => setPassword(text)} value={password} />
                <Text>Default username & password: root</Text>
                <Button title="Login" onPress={loginCheck} />
                
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
            fontWeight: 'bold',
            marginBottom: 15,
        },
        image: {
            width: 240,
            height: 240,
            marginTop: 5,
            marginBottom: 5,
        },
        input: {
            borderWidth: 1,
            borderColor: 'black',
            width: 200,
            padding: 10,
            borderRadius: 10,
            color: 'black',
            marginBottom: 15,
        }
    });

export default LoginScreen;