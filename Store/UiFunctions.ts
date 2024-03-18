import { create } from "zustand";

interface UiFunction {
    modal: boolean;
    toggleModal: (prop: boolean) => void;
    theme: string;
    submitStatus: boolean
    toggleStatus: (prop: boolean) => void;
}

export const UiFunctions = create<UiFunction>((set, get) => ({
    modal: false,
    toggleModal: (prop) => {
        set({modal: prop})
    },
    theme: '',
    submitStatus: false,
    toggleStatus: (prop) => {
     set({submitStatus: prop})
    }
})) 