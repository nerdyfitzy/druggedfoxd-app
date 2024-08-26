import { Link, Redirect, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';
import { useAuthStore } from '~/state/authStore';

export default function TabLayout() {
  const { isLoggedIn } = useAuthStore();
  return (
    <>
      {!isLoggedIn ? (
        <Redirect href="/" />
      ) : (
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: 'black',
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'All Posts',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            }}
          />
          {/* <Tabs.Screen
        name="new-uploads"
        options={{
          title: 'New Uploads',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}
        </Tabs>
      )}
    </>
  );
}
