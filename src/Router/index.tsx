
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "../Layout";

class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route
                        path="/"
                        render={() => {
                            return <Layout />
                        }}
                    />
                </Switch>
            </HashRouter>
        )
    }
}

export default Router;