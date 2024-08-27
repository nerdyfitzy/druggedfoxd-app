import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const BookmarkedLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Bookmarked Lessons',
          headerBlurEffect: 'regular',
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default BookmarkedLayout;
