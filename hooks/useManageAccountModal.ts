import { create } from 'zustand'

interface useManageAccountModalinterface {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useManageAccountModal = create<useManageAccountModalinterface>((set)=>({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))