import Provider from "./components/Provider";
import Router from "./components/Router";

const App = () => {
    return (
        <div className="App">
            <Provider>
                <Router />
            </Provider>
        </div>
    );
};

export default App;
