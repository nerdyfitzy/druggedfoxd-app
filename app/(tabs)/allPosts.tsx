import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Text } from 'tamagui';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'All Posts' }} />
      <View style={styles.container}>
        <Text>IN all Posts</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
