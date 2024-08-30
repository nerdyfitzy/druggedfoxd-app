import { create } from 'zustand';
import { Filters } from '~/constants/types';

type FilterStore = Filters & {
  setCharacter: (character: string | undefined) => void;
  setOpponent: (opponent: string | undefined) => void;
  setNotes: (notes: string | undefined) => void;
  setTimestamped: (timestamped: boolean) => void;
};

type ModalStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  character: undefined,
  opponent: undefined,
  notes: undefined,
  timestamped: false,
  setCharacter: (character: string | undefined) => set({ character: character || undefined }),
  setOpponent: (opponent: string | undefined) => set({ opponent: opponent || undefined }),
  setNotes: (notes: string | undefined) => set({ notes: notes || undefined }),
  setTimestamped: (timestamped: boolean) => set({ timestamped }),
}));

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
