import { View, Text, Image } from 'react-native';
import React from 'react';
import { Adapt, FontSizeTokens, getFontSize, Select, SelectProps, Sheet, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import { Check, ChevronDown } from 'lucide-react-native';

import { charOptions, notesOptions } from '~/constants/selectorOptions';
import { useFilterStore } from '~/state/filterStore';
import { images } from '~/constants/images';

const CustomSelector = (props: SelectProps & { context: 'character' | 'opponent' | 'notes' }) => {
  const options = props.context !== 'notes' ? charOptions : notesOptions;
  const { character, setCharacter, opponent, setOpponent, notes, setNotes } = useFilterStore(
    (state) => ({
      character: state.character,
      setCharacter: state.setCharacter,
      opponent: state.opponent,
      setOpponent: state.setOpponent,
      notes: state.notes,
      setNotes: state.setNotes,
    })
  );
  return (
    <Select
      value={
        props.context === 'character' ? character : props.context === 'opponent' ? opponent : notes
      }
      onValueChange={(val) => {
        if (props.context === 'character') {
          setCharacter(val);
        } else if (props.context === 'opponent') {
          setOpponent(val);
        } else {
          setNotes(val);
        }
      }}
      disablePreventBodyScroll
      {...props}>
      <Select.Trigger width={220} iconAfter={<ChevronDown size={20} />}>
        <Select.Value
          placeholder={
            props.context === 'character'
              ? 'Choose a character'
              : props.context === 'opponent'
                ? 'Choose an opponent'
                : 'Choose notes'
          }
        />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet
          native={!!props.native}
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: 'spring',
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3">
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$background', 'transparent']}
            borderRadius="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport
          // to do animations:
          // animation="quick"
          // animateOnly={['transform', 'opacity']}
          // enterStyle={{ o: 0, y: -10 }}
          // exitStyle={{ o: 0, y: 10 }}
          minWidth={200}>
          <Select.Group>
            <Select.Label>{props.context !== 'notes' ? 'Characters' : 'Notes'}</Select.Label>
            {/* for longer lists memoizing these is useful */}
            {React.useMemo(
              () =>
                options.map((item, i) => {
                  return (
                    <Select.Item index={i} key={item.label} value={item.value}>
                      <Select.ItemText>{item.label}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                      <Image source={images[item.value]} />
                    </Select.Item>
                  );
                }),
              [charOptions]
            )}
          </Select.Group>
          {/* Native gets an extra icon */}
          {props.native && (
            <YStack
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              alignItems="center"
              justifyContent="center"
              width={'$4'}
              pointerEvents="none">
              <ChevronDown size={getFontSize((props.size as FontSizeTokens) ?? '$true')} />
            </YStack>
          )}
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3">
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['transparent', '$background']}
            borderRadius="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
};

export default CustomSelector;
