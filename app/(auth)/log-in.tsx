import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H2, YStack, Text } from 'tamagui';
import EmailAuth from '~/components/auth/EmailAuth';
import OAuth from '~/components/auth/OAuth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
});

const Login = () => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Screen options={{ headerShown: false }} />
          <YStack
            flex={1}
            justifyContent="center"
            alignItems="center"
            gap="$4"
            paddingHorizontal="$15"
            backgroundColor="$background">
            <View style={{ gap: 15 }}>
              <View>
                <H2>Log In</H2>
                <Text color="$gray10Light" fontSize="$3">
                  to browse and watch Druggedfox lessons.{' '}
                </Text>
              </View>
              <EmailAuth />
              <Text color="$gray10Light" textAlign="center">
                or
              </Text>
            </View>
            <OAuth />
          </YStack>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;
