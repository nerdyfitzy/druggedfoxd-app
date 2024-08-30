import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Lesson from '~/components/Lesson';
import { FlashList } from '@shopify/flash-list';
import { getLessons } from '~/lib/lesson/lessons';
import { useLessonStore } from '~/state/lessonStore';
import { useHeaderHeight } from '@react-navigation/elements';
import { Filter } from 'lucide-react-native';
import { useFilterStore, useModalStore } from '~/state/filterStore';
import FilterModal from '~/components/FilterModal';

const dummy = [
  {
    character: 'Fox',
    date: '2023-05-01',
    id: 1,
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    notes: 'This is a test',
    opponent: 'Donkey Kong',
    player: 'fitzy',
    timestamped: true,
  },
];

export default function AllPosts() {
  const { lessons, setLessons, totalAmount, setTotalAmount } = useLessonStore();
  const { character, opponent, notes, timestamped } = useFilterStore((state) => ({
    character: state.character,
    opponent: state.opponent,
    notes: state.notes,
    timestamped: state.timestamped,
  }));
  const { isOpen, setIsOpen } = useModalStore();
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    const getFromDB = async () => {
      const { data, count } = await getLessons({ character, opponent, notes, timestamped });
      setLessons(data);
      setTotalAmount(count || 0);
    };
    if (!isOpen) getFromDB();
  }, [isOpen]);

  return (
    <>
      <Stack.Screen options={{ title: 'All Posts' }} />
      <View
        style={{
          paddingTop: headerHeight,
          flex: 1,
          paddingHorizontal: 15,
        }}>
        <FlashList
          numColumns={2}
          estimatedItemSize={700}
          data={lessons}
          renderItem={({ item }) => <Lesson {...item} />}
        />

        <TouchableOpacity
          onPress={() => setIsOpen(true)}
          style={{
            padding: 10,
            borderRadius: 100,
            backgroundColor: '#566fd3',
            position: 'absolute',
            bottom: 20,
            right: 20,
          }}>
          <Filter size={30} fill="black" color="black" />
        </TouchableOpacity>
        <FilterModal />
      </View>
    </>
  );
}
