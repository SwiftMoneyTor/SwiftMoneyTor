import useAppStore from "../../../appStore"

const Main = () => {
    const activeTitle = useAppStore(state => state.activeDash)
    return (
        <>
            <h1 className="text-capitalize">{activeTitle.split('_')[0]}</h1>
            Main
        </>
    )
}

export default Main