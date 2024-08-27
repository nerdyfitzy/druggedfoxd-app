import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const NewUploadsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'New Uploads', headerBlurEffect: 'regular', headerTransparent: true }}
      />
    </Stack>
  );
};

export default NewUploadsLayout;
