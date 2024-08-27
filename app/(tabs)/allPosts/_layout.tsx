import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const AllPostsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'All Posts', headerBlurEffect: 'regular', headerTransparent: true }}
      />
    </Stack>
  );
};

export default AllPostsLayout;
