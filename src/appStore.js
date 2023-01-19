import { create } from "zustand";

const useAppStore = create(set => ({
    component: 'home',
    activeDash: 'dashboard',
    auth: sessionStorage.getItem('auth') || false,
    setComponent: (val) => set(state => ({ component: val })),
    setActiveDash: (val) => set(state => ({ activeDash: val })),
    setAuth: () => set(state => ({ auth: !state.auth }))
}))

export default useAppStore