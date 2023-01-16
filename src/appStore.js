import { create } from "zustand";

const useAppStore = create(set => ({
    component: 'home',
    dashboard: false,
    activeDash: 'dashboard',
    hideMenu: false,
    setDashboard: () => set(state => ({ dashboard: !state.dashboard })),
    setComponent: (val) => set(state => ({ component: val })),
    setActiveDash: (val) => set(state => ({ activeDash: val })),
    setHideMenu: () => set(state => ({ hideMenu: !state.hideMenu }))
}))

export default useAppStore