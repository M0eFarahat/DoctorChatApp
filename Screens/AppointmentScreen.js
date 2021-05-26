import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Doctors from '../Screens/DoctorList';


  
const AppointmentScreen = () => {
    return (
        <View styles={stylesssss.container }>
            <Text>asdasd</Text>
            <FlatList
                data={Doctors} // array
                keyExtractor={(item) => item.id }
                renderItem={({ item }) => (
                    // add you UI here

                    
                    <View style={stylesssss.searchView}>

                        {console.log('item',item)}
                        <View style={{ //Row
                            width: '90%',
                            flexDirection: 'row',
                            alignItens: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                        }}>
                            <Image
                                source={{ uri: '' }}
                                style={{
                                    width: '15%',
                                    height: '15%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '10px',
                                }}
                            />
                            <Text style={{ // BoldTex
                                fontSize: 16,
                                color: 'black',
                            }}>{item.Name}</Text>
                        </View>
                        <View style={{ //Row
                            width: '90%',
                            flexDirection: 'row',
                            alignItens: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                        }}>
                            <Text style={{ // BoldTex
                                fontSize: 16,
                                color: 'black',
                            }}>{item.Major}</Text>
                            <Text style={{ // BoldTex
                                fontSize: 16,
                                color: 'black',
                            }}>{item.Price}</Text>
                        </View>
                        <View style={{ //Row
                            width: '90%',
                            flexDirection: 'row',
                            alignItens: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                        }}>
                             <Text style={{ // BoldTex
                                fontSize: 16,
                                color: 'black',
                            }}>{item.AvailbleTime}</Text>
                        </View>
                    </View>

                )}
                extraData={Doctors}
            />
        </View>
    );
};


const stylesssss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: 'center',

    },
    action: {
        flexDirection: 'row',
        paddingBottom: 5,
        width: "65%",
        backgroundColor: "#fff",
        borderRadius: 25,
        height: 50,
        // marginBottom:20,
        justifyContent: "center",
        padding: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#148beb',
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



    },
    searchView: {
        width: '90%',
        minHeight: '15%',
        borderRadius: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        alignSelf: 'center',
    },


});
export default AppointmentScreen;