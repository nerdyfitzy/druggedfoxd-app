import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Adapt, Card, H3, ListItem, Paragraph, Popover, XStack, YStack } from 'tamagui';
import { Lesson as LessonType } from '~/constants/types';
import { images } from '~/constants/images';
import { CircleCheck, CircleX, Ellipsis } from 'lucide-react-native';
import * as Linking from 'expo-linking';
import { Ellipsis, BookmarkPlus, Eye } from 'lucide-react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  trigger: {
    position: 'absolute',
    right: 10,
    top: 3,
  },
});

const Lesson = (props: LessonType) => {
  const pressButton = () => {
    console.log('p');
  };
  return (
    <View>
      <TouchableOpacity onPress={() => Linking.openURL(props.link)}>
        <Card
          position="relative"
          padding="$2"
          width="$13"
          bordered={true}
          borderColor="$color5"
          marginBottom="$4">
          <Popover allowFlip size="$6" placement="bottom-start">
            <Popover.Trigger asChild>
              <Ellipsis style={styles.trigger} />
            </Popover.Trigger>

            <Adapt>
              <Popover.Sheet>
                <Popover.Sheet.Frame>
                  <Adapt.Contents />
                </Popover.Sheet.Frame>
                <Popover.Sheet.Overlay
                  animation="lazy"
                  enterStyle={{ opacity: 0 }}
                  exitStyle={{ opacity: 0 }}
                />
              </Popover.Sheet>
            </Adapt>
            <Popover.Content
              borderWidth={1}
              borderColor="$borderColor"
              enterStyle={{ y: -10, opacity: 0 }}
              exitStyle={{ y: -10, opacity: 0 }}
              elevate
              animation={[
                'quick',
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}>
              <YStack>
                <ListItem hoverTheme icon={BookmarkPlus} title="Bookmark Lesson" />
                <ListItem hoverTheme icon={Eye} title="Mark as watched" />
              </YStack>
            </Popover.Content>
          </Popover>
          <Card.Header>
            <H3>{props.player}</H3>
            <XStack gap="$2">
              <Image source={images[props.character]} />
              <Paragraph> vs </Paragraph>
              <Image source={images[props.opponent]} />
            </XStack>
          </Card.Header>
          <YStack>
            <Paragraph>Timestamped: {props.timestamped ? <CircleCheck /> : <CircleX />}</Paragraph>
            <Paragraph>Notes: {props.notes}</Paragraph>
          </YStack>
          <Card.Footer>
            <Paragraph>{props.date}</Paragraph>
          </Card.Footer>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default Lesson;
