import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, H3, Paragraph, XStack, YStack } from 'tamagui';
import { Lesson as LessonType } from '~/constants/types';
import { images } from '~/constants/images';
import { CircleCheck, CircleX, Ellipsis } from 'lucide-react-native';
import * as Linking from 'expo-linking';

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
          <View
            style={{ position: 'absolute' }}
            onStartShouldSetResponder={(e) => true}
            onTouchEnd={(e) => e.stopPropagation()}>
            <Ellipsis onPress={pressButton} />
          </View>
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
