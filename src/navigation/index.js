import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from "../screens/signin";
import SignUp from "../screens/signup";
import Contacts from "../screens/contacts";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={Signin}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="Contacts" component={Contacts}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

export default Navigation;