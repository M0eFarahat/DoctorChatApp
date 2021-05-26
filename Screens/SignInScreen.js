import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Platform,
    StatusBar,
    TextInput,
    Image,
    Linking,
    KeyboardAvoidingView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import { AuthContext } from "../Components/Context";
import react from 'react';






const SignInScreen = ({navigation}) => {

    const [data,setData] = React.useState({
        email:'',
        password:'',
        check_textInputtChange: false,
        secureTextEntry: true
    });

    const {signIn} = React.useContext(AuthContext);

    const textInputChange = (val) =>{
        if (val.length != 0) {
            setData({
                ...data,
                email:val,
                check_textInputtChange:true

            });
        }
        else{
            setData({
                ...data,
                email:val,
                check_textInputtChange:false

            });
        }
    }

    const handlePasswordChange = (val) => {
       
            setData({
                ...data,
                password: val,
            });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const loginHandle = (username , passwrod) => {

        signIn(username,passwrod)
    }

    return (
        <KeyboardAvoidingView style={stylessss.container}>
            <StatusBar backgroundColor='#148beb' barStyle="light-content" />
            <View style={stylessss.header}>
                <Image
                    source={require('../assets/checkup_medical_app_logo.png')}
                    style={stylessss.logo}
                />
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[stylessss.footer, {
                }]}
            >
                <View style={stylessss.action}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#D3D3D3"
                        autoCapitalize='none'
                        style={[stylessss.textInput, {
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                
                </View>
                {/* <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={stylessss.errorMsg}>Username must be 4 characters long.</Text>
                </Animatable.View> */}
                <View style={stylessss.action}
                    marginTop={30}>
                    <TextInput
                        secureTextEntry = {data.secureTextEntry ? true:false}
                        style={stylessss.inputText}
                        placeholder="Password"
                        placeholderTextColor="#D3D3D3"
                        style={[stylessss.textInput]}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}

                    />
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                    <Feather
                        name="eye-off"
                        color="grey"
                        size={13}
                    />
                    :
                    <Feather
                    name="eye"
                    color="grey"
                    size={13}
                     />
                    }
                    </TouchableOpacity>
                   
                </View>
                {/* <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={stylessss.errorMsg}>Password must be 8 characters long.</Text>
                </Animatable.View> */}
                <View marginTop={30}><TouchableOpacity>
                    <Text style={stylessss.forgot}>Forgot Password?</Text>
                </TouchableOpacity></View>

                <TouchableOpacity style={stylessss.loginBtn}
                onPress={()=>{loginHandle(data.email,data.password)}}>
                    <Text style={stylessss.loginText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylessss.signUpBtn}
                onPress = {()=>navigation.navigate('SignUpScreen') }>
                    <Text style={stylessss.signUpText}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylessss.emergncyBtn} 
                     onPress={() => {
                        Linking.openURL(`tel: {911}`)
                    }}>
                    <Text style={stylessss.signUpText}>Emergency</Text>
                </TouchableOpacity>
            </Animatable.View>
        </KeyboardAvoidingView>
    );
};


const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const stylessss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#178eea',

    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        paddingBottom: 5,
        flexDirection: 'row',
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 25,
        height: 50,
        // marginBottom:20,
        justifyContent: "center",
        padding: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#148beb',
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    inputText: {
        height: 50,
        color: "#05375a"
    },
    forgot: {
        color: "#05375a",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#148beb',

    },
    signUpBtn: {
        width: "80%",
        backgroundColor: "#148beb",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#fff',

    },
    loginText: {
        color: "#148beb"
    },
    signUpText: {
        color: "#fff"
    },
    emergncyBtn: {
        width: "40%",
        backgroundColor: "red",
        borderRadius: 25,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#fff',

    }
});

export default SignInScreen;