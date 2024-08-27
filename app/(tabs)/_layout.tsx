import { Link, Redirect, Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';
import { useAuthStore } from '~/state/authStore';

export default function TabLayout() {
  const { isLoggedIn } = useAuthStore();
  return (
    <>
      {!isLoggedIn ? (
        <Redirect href="/" />
      ) : (
        <Tabs screenOptions={{ headerShown: false }}>
          <Tabs.Screen
            name="allPosts"
            options={{
              title: 'All Posts',
              tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            }}
          />
          <Tabs.Screen
            name="newUploads"
            options={{
              title: 'New Uploads',
              tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
            }}
          />
          <Tabs.Screen
            name="bookmarked"
            options={{
              title: 'Bookmarked',
              tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
            }}
          />
          <Tabs.Screen
            name="watched"
            options={{
              title: 'Watched',
              tabBarIcon: ({ color }) => <TabBarIcon name="eye" color={color} />,
            }}
          />
        </Tabs>
      )}
    </>
  );
}
