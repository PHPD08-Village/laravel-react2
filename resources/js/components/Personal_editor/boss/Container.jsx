// Personal_editor/Container.jsx
import AppProvider, { AppContext } from './AppProvider'; // 引入 Context Provider

const ContainerContent = () => {
    const { } = useContext(AppContext);

    return (
        <>
            <div className="fcontainer">
            </div>
        </>
    );
};

const Container = () => {
    return (
        <AppProvider>
            <ContainerContent />
        </AppProvider>
    );
};

export default Container;
