import { create } from 'zustand'

interface usePostModalinterface {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const usePostModal = create<usePostModalinterface>((set)=>({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))