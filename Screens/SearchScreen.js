import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image,SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Doctors from '../Screens/DoctorList';

const SearchScreen = () => {

    
    
    return (
        
            <View style={styles.container}>
                <Text style={styles.header}>Search Screen</Text>
            </View>
        );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#178eea",
        alignItems: 'center',

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


export default SearchScreen;