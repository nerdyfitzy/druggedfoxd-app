import { create } from 'zustand';

type LoadingState = {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
};

export const useLoadingStore = create<LoadingState>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => {
    set({ loading });
  },
}));
