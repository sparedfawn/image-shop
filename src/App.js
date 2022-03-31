import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

const App = () => {
    return (
        <div>
            <Header />
            <div className="grid">
                <section className="middle-column">
                    <Switch>
                        <Route exact path="/">
                            <Photos />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                    </Switch>
                </section>
            </div>
        </div>
    );
};

export default App;
