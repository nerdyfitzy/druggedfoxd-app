import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants/images';
import { Button, Text } from 'tamagui';
import { Link, Redirect } from 'expo-router';
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
});

const Home = () => {
  const { isLoggedIn, setIsLoggedIn, getUser } = useAuthStore((state) => ({
    getUser: state.getUser,
    isLoggedIn: state.isLoggedIn,
    setIsLoggedIn: state.setIsLoggedIn,
  }));
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await getUser();
      setIsLoggedIn(user ? true : false);
    };
    fetchUser();
  }, []);
  console.log('i am here', isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Redirect href="/allPosts" />
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
      )}
    </>
  );
};

export default Home;
