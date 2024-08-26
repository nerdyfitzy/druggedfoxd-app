import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants/images';
import { Button, Text } from 'tamagui';
import { Link, Redirect } from 'expo-router';
import { supabase } from '~/lib/supabase';
import { useAuthStore } from '~/state/authStore';

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 250,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '',
  },
});

const Home = () => {
  const { isLoggedIn, setIsLoggedIn, getUser } = useAuthStore((state) => ({
    getUser: state.getUser,
    isLoggedIn: state.isLoggedIn,
    setIsLoggedIn: state.setIsLoggedIn,
  }));
  useEffect(() => {
    const set = async () => {
      const {
        data: { user },
      } = await getUser();
      setIsLoggedIn(user ? true : false);
    };
    set();
  }, []);
  console.log('i am here', isLoggedIn);
  return isLoggedIn ? (
    <Redirect href="/(tabs)/" />
  ) : (
    <SafeAreaView style={styles.container}>
      <Image source={images.LogoDark} resizeMode="contain" style={styles.image} />
      <Link href="/(auth)/log-in" asChild>
        <Button width={250}>Log in</Button>
      </Link>
      <Text color="$gray10Light">or</Text>
      <Link href="/(auth)/sign-up" asChild>
        <Button width={250}>Sign up</Button>
      </Link>
    </SafeAreaView>
  );
};

export default Home;
