import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';


const SplashScreen = ({ navigation }) => {
    return (
        <View style={stylesss.container}>
            <StatusBar backgroundColor='#148beb' barStyle="light-content"/>
            <View style={stylesss.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    source={require('../assets/logo.png')}
                    style={stylesss.logo}
                    resizeMode="center" />
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={stylesss.footer}>
                <Text style={stylesss.title}>Stay Connected with your doctor from anywhere!</Text>
                <Text style={stylesss.text}>Sign in with account</Text>
                <View style={stylesss.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['#268cde', '#268cde']}
                            style={stylesss.signIn}>
                            <Text style={stylesss.textSign}>Get Started</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color='#fff'
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const stylesss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#178eea'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default SplashScreen;