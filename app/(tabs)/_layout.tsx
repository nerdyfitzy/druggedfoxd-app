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
        <Tabs>
          <Tabs.Screen
            name="allPosts"
            options={{
              title: 'All Posts',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            }}
          />
          <Tabs.Screen
            name="newUploads"
            options={{
              title: 'New Uploads',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            }}
          />
          <Tabs.Screen
            name="bookmarked"
            options={{
              title: 'Bookmarked',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            }}
          />
          <Tabs.Screen
            name="watched"
            options={{
              title: 'Watched',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            }}
          />
        </Tabs>
      )}
    </>
  );
}
