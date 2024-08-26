import { create } from 'zustand';

type FormState = {
  email: string;
  password: string;
  confirmPW?: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPW: (confirmPW: string) => void;
};

export const useFormStore = create<FormState>((set) => ({
  email: '',
  password: '',
  confirmPW: '',
  setEmail: (email: string) => {
    set({ email });
  },
  setPassword: (password: string) => {
    set({ password });
  },
  setConfirmPW: (confirmPW: string) => {
    set({ confirmPW });
  },
}));

export const useShowPWStore = create<{ showPW: boolean; setShowPW: (showPW: boolean) => void }>(
  (set) => ({
    showPW: false,
    setShowPW: (showPW: boolean) => {
      set({ showPW });
    },
  })
);
