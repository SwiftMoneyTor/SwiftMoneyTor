import { create } from "zustand";

const useAppStore = create(set => ({
    component: 'home',
    activeDash: 'dashboard',
    auth: sessionStorage.getItem('auth') || false,
    credentials: {
        username: '',
        email: '',
        userType: '',
        token: ''
    },
    setComponent: (val) => set(state => ({ component: val })),
    setActiveDash: (val) => set(state => ({ activeDash: val })),
    setAuth: () => set(state => ({ auth: !state.auth })),
    setCredentials: (val) => set(state => ({ ...credentials, [val['key']]: val['value'] }))
}))

export default useAppStore