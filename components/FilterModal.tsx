import type { SheetProps } from 'tamagui';
import { Button, Label, Sheet, Switch, YStack } from 'tamagui';
import React from 'react';
import { useFilterStore, useModalStore } from '~/state/filterStore';
import CustomSelector from './CustomSelector';

const FilterModal = (props: SheetProps) => {
  const { isOpen, setIsOpen } = useModalStore();
  const {
    character,
    opponent,
    notes,
    timestamped,
    setTimestamped,
    setNotes,
    setCharacter,
    setOpponent,
  } = useFilterStore((state) => ({
    character: state.character,
    opponent: state.opponent,
    notes: state.notes,
    timestamped: state.timestamped,
    setNotes: state.setNotes,
    setCharacter: state.setCharacter,
    setOpponent: state.setOpponent,
    setTimestamped: state.setTimestamped,
  }));
  return (
    <Sheet
      modal={true}
      open={isOpen}
      onOpenChange={() => setIsOpen(!isOpen)}
      animation="lazy"
      {...props}>
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Handle />
      <Sheet.Frame
        paddingTop="$8"
        paddingHorizontal="$12"
        flex={1}
        gap="$4"
        justifyContent="flex-start"
        alignItems="flex-start">
        <YStack>
          <Label>Character:</Label>
          <CustomSelector context="character" />
        </YStack>
        <YStack>
          <Label>Opponent:</Label>
          <CustomSelector context="opponent" />
        </YStack>
        <YStack>
          <Label>Notes:</Label>
          <CustomSelector context="notes" />
        </YStack>
        <YStack>
          <Label>Timestamped:</Label>
          <Switch checked={timestamped} onCheckedChange={(val) => setTimestamped(val)}>
            <Switch.Thumb animation="quick" />
          </Switch>
        </YStack>
        <Button
          backgroundColor={'$color5'}
          style={{ width: '100%' }}
          onPress={() => {
            setNotes(undefined);
            setCharacter(undefined);
            setOpponent(undefined);
            setTimestamped(false);

            console.log('cleared', character, opponent, notes, timestamped);
          }}>
          Clear Filters
        </Button>
        <Button
          style={{ width: '100%' }}
          backgroundColor={'$accentColor'}
          onPress={() => setIsOpen(false)}>
          Apply Filters
        </Button>
      </Sheet.Frame>
    </Sheet>
  );
};

export default FilterModal;
