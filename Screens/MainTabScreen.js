//imported packages
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';



//imported screens
import SettingsScreen from './SettingsScreen';
import ChatScreen from './ChatScreen'
import SearchScreen from './SearchScreen'
import AppointmentScreen from './AppointmentScreen';
import NotificationScreen from './NotificationsScreen'
import ProfileScreen from './ProfileScreen'
import PharmacyScreen from './PharmacyScreen'
import CalenderScreen from './CalenderScreen'


//logic
const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const Tab = createBottomTabNavigator();



const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Search"
    tabBarOptions={{
      activeTintColor: '#178eea',
    }}>
  
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" size={20} />),

      }}
    />
    <Tab.Screen
      name="Appointment"
      component={AppointmentScreen}
      options={{
        tabBarLabel: 'Meetings',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="book" size={20} />),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        tabBarLabel: 'Messages',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-chatbubbles-sharp" size={20} />),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="notifications-sharp" size={20} />
        ),
        tabBarBadge: 2,
      }}
    />
   
  </Tab.Navigator>

);


export default MainTabScreen;

const SearchStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#178eea',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name={'Search'} component={SearchScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu-sharp" size={25}
          backgroundColor='#178eea' onPress={() => { navigation.openDrawer() }}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);

// const NotificationStackScreen = ({ navigation }) => (
//   <NotificationStack.Navigator screenOptions={{
//     headerStyle: {
//       backgroundColor: '#178eea',

//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold'
//     }
//   }}>
//     <NotificationStack.Screen name={'Notifications'} component={NotificationScreen} options={{
//       headerLeft: () => (
//         <Icon.Button name="ios-menu-sharp" size={25}
//           backgroundColor='#178eea' onPress={() => { navigation.openDrawer() }}></Icon.Button>
//       )
//     }} />
//   </NotificationStack.Navigator>
// );