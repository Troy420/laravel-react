import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import MenuNavigation from "./MenuNavigation";
import Headline from "./Headline";
import Featured from "./Featured";
import Discover from "./Discover";

function App() {
    return (
        <>
            <Header />
            <MenuNavigation />
            <Headline />
            <Featured />
            <Discover />
        </>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
