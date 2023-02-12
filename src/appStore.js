import { create } from "zustand";
import avatar from '/src/assets/dashboard/avatar.png';

const useAppStore = create(set => ({

    component: 'home',
    activeDash: 'dashboard',
    profilePic: `${avatar}`,
    auth: false,
    credentials: {
        name: '',
        email: '',
        token: '',
        id: ''
    },
    setComponent: (val) => set(state => ({ component: val })),
    setActiveDash: (val) => set(state => ({ activeDash: val })),
    setAuth: () => set(state => ({ auth: !state.auth })),
    setCredentials: (val) => set(state => ({ credentials: val })),
    setProfilePic: (val) => set(state => ({ profilePic: val }))
}))


export default useAppStore