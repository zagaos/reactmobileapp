import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './pages/login';
import Student from './pages/student';
import StudentDetail from './pages/studentdetail';
import { StyleSheet, Button, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';





const RootStack  = createStackNavigator();
const Tab  = createBottomTabNavigator();
function mainTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 15,
          },

        }
      }
    >
    <Tab.Screen name="Student"  component={Student} 
    options={{
     tabBarLabel: 'Student List',
     tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={'blue'} size={25} />
          ),

        }}
    />
    <Tab.Screen name="StudentDetail"  component={StudentDetail}
        options={{
          tabBarLabel: 'Student',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={'blue'} size={25} fond={25}/>
          ),
        }}
    />   
     </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
       screenOptions={{ headerStyle: { backgroundColor: 'red'} }}
>
      <RootStack.Screen name="Login"  component={Login}/>
      <RootStack.Screen name="Students" component={mainTabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
