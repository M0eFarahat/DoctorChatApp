import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './Screens/MainTabScreen';
import {DrawerContent} from './Screens/DrawerContent'
import SettingsScreen from './Screens/SettingsScreen';
import NotificationScreen from './Screens/NotificationsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import PharmacyScreen from './Screens/PharmacyScreen';
import CalenderScreen from './Screens/CalenderScreen';
import RootStackScreen from './Screens/RootStackScreen';
import { ActivityIndicator, View } from 'react-native';
import { useEffect } from 'react';
import { AuthContext } from "./Components/Context";



const Drawer = createDrawerNavigator();


const MainNavigator = () => {

   const [isLoading,setIsLoading] = React.useState(true);
   const [userToken,setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: false,
    userName: null,
    userToken: 'fsdfsd',
  };

  const loginReducer = (prevState,action) => {
    switch (action) {
      case "RETRIEVE_TOKEN":
        return{
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
        case "LOGIN":
        return{
          ...prevState,
          userName: action.id,
          userToken:action.token,
          isLoading: false,
        };
        case "LOGOUT":
        return{
          ...prevState,
          userName: null,
          userToken:null,
          isLoading: false,
        };
        case "REGISTER":
        return{
          ...prevState,
          userName: action.id,
          userToken:action.token,
          isLoading: false,
        };
    }

  };

  const [loginState,dispatch]= React.useReducer(loginReducer,initialLoginState);

  const authContext = React.useMemo(()=>({
    signIn: (userName,password)=>{
      setUserToken('asd');
      setIsLoading(false);
      // let userToken;
      // userToken = null;
      // if (userName === 'user' && password ==='pass') {
      //   userToken = 'asdfg';
      // }
      // dispatch({type: 'LOGIN',id: userName , token: userToken})
    },
    signOut: ()=>{
      setUserToken(null);
      setIsLoading(false);
      // dispatch({type: 'LOGOUT'})

    },
    signUp: ()=>{
      setUserToken('asd');
      setIsLoading(false);
    },
  }),[]);

  useEffect(()=>{
      setTimeout(()=>{
         setIsLoading(false);
        // dispatch({type: 'RETRIEVE_TOKEN', token: 'qwerty'})
      },1000);
  },[]);

  if (isLoading) {
      return(
        <View style={{flex:1 ,justifyContent:"center",alignItems:'center'}}>
          <ActivityIndicator size="large" color="#178eea"/>
        </View>
      );
  }

  return (

<AuthContext.Provider value = {authContext}>
<NavigationContainer>
{userToken != null ? (
<Drawer.Navigator  drawerContent={props=><DrawerContent{...props } />}> 
  <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
  <Drawer.Screen name="Profile" component={ProfileScreen} />
  <Drawer.Screen name="Notification" component={NotificationScreen} />
  <Drawer.Screen name="Calender" component={CalenderScreen} />
  <Drawer.Screen name="Pharmacy" component={PharmacyScreen} />
  <Drawer.Screen name="Settings" component={SettingsScreen} />
</Drawer.Navigator>
  ) 
  :
<RootStackScreen/>
}
</NavigationContainer>
</AuthContext.Provider>
    
  )
}

export default MainNavigator;