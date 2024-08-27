import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const WatchedLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Watched Lessons', headerBlurEffect: 'regular', headerTransparent: true }}
      />
    </Stack>
  );
};

export default WatchedLayout;
