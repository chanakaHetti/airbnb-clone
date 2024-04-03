import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import Colors from '@/constants/Colors';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
        },
      }}
    >
      {/* Index Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />

      {/* Wishlists Tab */}
      <Tabs.Screen
        name="wishlists"
        options={{
          tabBarLabel: 'Wishlists',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Trips Tab */}
      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="airbnb" color={color} size={size} />
          ),
        }}
      />

      {/* Inbox Tab */}
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
