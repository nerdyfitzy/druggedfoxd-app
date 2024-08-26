import { useRouter, Stack } from 'expo-router';
import React, { useCallback } from 'react';
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

const Login = () => {
  const { loading, setLoading } = useLoadingStore();
  const { logIn, isLoggedIn } = useAuthStore((state) => ({
    logIn: state.logIn,
    isLoggedIn: state.isLoggedIn,
  }));
  const router = useRouter();
  if (isLoggedIn) {
    router.replace('/(tabs)allPosts');
  }
  const handleSubmit = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      const error = await logIn(email, password);
      if (error) Alert.alert(error.message);
      else setLoading(false);
    },
    [logIn, setLoading]
  );
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
              <EmailAuth submit={handleSubmit} loading={loading} />
            </View>
          </YStack>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;
