import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../Routes/Main";
import Form from "../Routes/Form";
import Submit from "../Routes/Submit/Submit";
import MyPage from "../Routes/MyPage";
import Result from "../Routes/Result/Result";

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" exact component={Main} />
            <Route path="/form" component={Form} />
            <Route path="/submit" component={Submit} />
            <Route path="/myPage" component={MyPage} />
            <Route path="/result" component={Result} />
            <Redirect path="*" to="/" />
        </Switch>
        {/* <Footer /> */}
    </Router>
);
