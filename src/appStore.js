import { create } from "zustand";

const useAppStore = create(set => ({
    component: 'home',
    dashboard: sessionStorage.getItem('loggedin') || false,
    activeDash: 'dashboard',
    setDashboard: () => set(state => ({ dashboard: !state.dashboard })),
    setComponent: (val) => set(state => ({ component: val })),
    setActiveDash: (val) => set(state => ({ activeDash: val })),
}))

export default useAppStore