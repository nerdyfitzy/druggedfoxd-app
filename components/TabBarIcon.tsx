import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import { House, CalendarPlus, Bookmark, Eye } from 'lucide-react-native';
import { Text, View } from 'tamagui';

const icons = {
  home: House,
  calendar: CalendarPlus,
  bookmark: Bookmark,
  eye: Eye,
};

export const TabBarIcon = (props: {
  name: 'home' | 'calendar' | 'bookmark' | 'eye';
  color: string;
}) => {
  // return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
  return (
    <>
      {props.name === 'home' ? (
        <House size={28} style={styles.tabBarIcon} {...props} />
      ) : props.name === 'calendar' ? (
        <CalendarPlus size={28} style={styles.tabBarIcon} {...props} />
      ) : props.name === 'bookmark' ? (
        <Bookmark size={28} style={styles.tabBarIcon} {...props} />
      ) : props.name === 'eye' ? (
        <Eye size={28} style={styles.tabBarIcon} {...props} />
      ) : (
        <Text>no icon</Text>
      )}
    </>
  );
};

export const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
