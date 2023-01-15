import { create } from "zustand";

const useAppStore = create(set => ({
    component: 'home',
    dashboard: false,
    setDashboard: () => set(state => ({ dashboard: !state.dashboard })),
    setComponent: (val) => set(state => ({ component: val }))
}))

export default useAppStore