import react from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from "../Components/Context";



export function DrawerContent(props) {

    // const navigation = useNavigation();
    const [isDarkTheme,setIsDarkTheme]= React.useState(false);

    const toggleTheme = ()=>{
        setIsDarkTheme(!isDarkTheme);
    }
    const {signOut} = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView{...props}>
                <View style={styless.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar.Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTI1o4HomOWeLJ1IWsF-tDCcaO2exEg-tREA&usqp=CAU' }}
                            size={50}
                        />
                        <View style={{
                            marginLeft: 15,
                            flexDirection: 'column'
                        }}>
                            <Title style={styless.title}>Username</Title>
                        </View>
                    </View>
                    <Drawer.Section style={styless.bottomDrawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bell-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Notification"
                            onPress={() => { props.navigation.navigate('Notification')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="calendar-month-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Calender"
                            onPress={() => { props.navigation.navigate('Calender')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="medical-bag"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Pharmacy"
                            onPress={() => {props.navigation.navigate('Pharmacy') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cog-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings') }}
                        />

                    </Drawer.Section>
                    <Drawer.Section Title = 'preferences'>
                        <TouchableRipple onPress={()=>{toggleTheme()}}>
                            <View style={styless.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents = "none">
                                        <Switch value={isDarkTheme} />
                                </View>
                                
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styless.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="sign out"
                    onPress={() => { }}
                />
            </Drawer.Section>
        </View>
    );
}

const styless = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});