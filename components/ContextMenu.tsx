import { View, Text } from 'react-native';
import React from 'react';
import { ListItem, YGroup } from 'tamagui';

type ContextMenuProps = {
  lessonId: number;
};

const ContextMenu = (props: React.PropsWithChildren & ContextMenuProps) => {
  return (
    <YGroup>
      <YGroup.Item>
        <ListItem title="Bookmark Lesson" />
      </YGroup.Item>
    </YGroup>
  );
};

export default ContextMenu;
