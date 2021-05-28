import React from "react";
//import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Settings from "../screens/Settings";
import HomeStack from "./HomeStack";
import Info from "../screens/Info";
import Cart from "../screens/Cart";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name = "home" component={Home} options={{title: 'Home'}}/> */}
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="contact"
        component={Contact}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cog-transfer"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

/* const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "home" component={Home} options={{title: 'Home'}}/>
            <Stack.Screen name = "contact" component={Contact} options={{title: 'Contact'}}/>
            <Stack.Screen name = "about" component={About} options={{title: 'Acerca de nosotros'}}/>
        </Stack.Navigator>
    )

} */
