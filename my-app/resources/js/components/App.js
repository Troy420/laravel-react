import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import MenuNavigation from "./MenuNavigation";
import Headline from "./Headline";
import Featured from "./Featured";

function App() {
    return (
        <>
            <Header />
            <MenuNavigation />
            <Headline />
            <Featured />
        </>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
