import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const LoginScreen = () => {
    const Continue = () => {
        // navigation.navigate('chatscreen')
    }
    const navigation = useNavigation();

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')



    return (
        <View style={styles.container}>

            <View style={styles.cirle} />
            <View style={{ marginTop: 64 }}>
                <Image
                    source={require('../assets/chat.png')}
                    style={{ width: 100, height: 100, alignSelf: 'center' }} />

            </View>
            <View style={{ marginHorizontal: 32 }}>
                <Text style={styles.header}>Username</Text>
                <TextInput style={styles.input} placeholder='Username' onChangeText={name => setName(name)} value={name} />
            </View>
            <View style={{ marginHorizontal: 32 }}>
                <Text style={styles.header}>password</Text>
                <TextInput style={styles.input} placeholder='password' secureTextEntry onChangeText={password => setPassword(password)} value={password} />
            </View>
            <View style={{ alignItems: 'center', marginTop: 30 }} >
                <TouchableOpacity style={styles.continue} onPress={() => Continue()}>
                    <Image
                        source={require('../assets/login.png')}
                        style={{ width: 70, height: 50, alignSelf: 'center' }} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL(`tel: {911}`)
                    }}
                    style={styles.continue}
                >
                    <Image
                        source={require('../assets/emergency.png')}
                        style={{ width: 50, height: 50, alignSelf: 'center' }} />
                    {/* <FontAwesome5
              name={'phone'}
              color={'black'}
              size={40}
              solid
                /> */}
                </TouchableOpacity>
            </View>
        </View >
    );

}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "red",
        position: 'absolute',
        left: -120,
        top: -20,

    },

    header: {
        fontWeight: '800',
        fontSize: 30,
        color: '#514E5A',
        marginTop: 32
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#BAB7C3',
        borderRadius: 30,
        paddingHorizontal: 16,
        color: '#514E5A',
        fontWeight: '600'

    },

    continue: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        justifyContent: 'center'



    }

});

export default LoginScreen;