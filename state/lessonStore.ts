import { create } from 'zustand';
import { Lesson } from '~/constants/types';

type LessonState = {
  lessons: Lesson[];
  setLessons: (lessons: Lesson[]) => void;
  totalAmount: number;
  setTotalAmount: (totalAmount: number) => void;
};

export const useLessonStore = create<LessonState>((set) => ({
  lessons: [],
  totalAmount: 0,
  setTotalAmount: (totalAmount: number) => {
    set({ totalAmount });
  },
  setLessons: (lessons: Lesson[]) => {
    set({ lessons });
  },
}));
