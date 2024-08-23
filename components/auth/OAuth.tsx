import { View, Text, Image } from 'react-native';
import React from 'react';
import { Button, XStack } from 'tamagui';
import { images } from '~/constants/images';
import { providers } from '~/constants/oauth';

const OAuth = () => {
  console.log(images);
  return (
    <XStack gap="$4">
      {providers.map((prov) => (
        <Button key={prov} width="$9" backgroundColor="$background">
          <Image
            source={images[prov]}
            alt={prov}
            resizeMode="contain"
            style={{ height: 25, width: 25 }}
          />
        </Button>
      ))}
    </XStack>
  );
};

export default OAuth;
