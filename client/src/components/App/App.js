import React from "react";
import "./App.scss";
import PreviewPage from "../PreviewPage";
import Header from "../Header";
import "../../styles/fontello/css/fontello.css";


const App = () => {
    return (
        <section>
            <Header />
            <PreviewPage />
        </section>
    );
};


export default App;
