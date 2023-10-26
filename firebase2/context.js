import { create } from 'zustand'

const teste = create((set) => ({
    isLogin: false,
    signIn: () => set((state) => ({ isLogin: true})),
}))

export default teste