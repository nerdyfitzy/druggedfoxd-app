import { Stack, useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback, View, AppState } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H2, YStack, Text } from 'tamagui';
import EmailAuth from '~/components/auth/EmailAuth';
import { supabase } from '~/lib/supabase';
import { useAuthStore } from '~/state/authStore';
import { useLoadingStore } from '~/state/loadingStore';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

const SignUp = () => {
  const { loading, setLoading } = useLoadingStore();
  const { signUp, isLoggedIn } = useAuthStore((state) => ({
    signUp: state.signUp,
    isLoggedIn: state.isLoggedIn,
  }));
  const router = useRouter();
  const handleSubmit = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      const { error, data } = await signUp(email, password);
      if (error) Alert.alert(error.message);
      else if (!data.session) Alert.alert('Check inbox for an email confirmation!');
      setLoading(false);
    },
    [signUp, setLoading]
  );

  //@ts-ignore
  if (isLoggedIn) router.replace('/(tabs)allPosts');

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
                <H2>Sign Up</H2>
                <Text color="$gray10Light" fontSize="$3">
                  to browse and watch Druggedfox lessons.{' '}
                </Text>
              </View>
              <EmailAuth signUp submit={handleSubmit} loading={loading} />
            </View>
          </YStack>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default SignUp;
