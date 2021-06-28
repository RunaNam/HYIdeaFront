import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../Routes/Main";
import Form from "../Routes/Form";
<<<<<<< HEAD
import Submit from "../Routes/Submit";
import MyPage from "../Routes/MyPage";
=======
import Submit from "../Routes/Submit/Submit";
>>>>>>> bd65653bbdab68c19450409f2512ee93488277d5

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" exact component={Main} />
            <Route path="/form" component={Form} />
            <Route path="/submit" component={Submit} />
            <Route path="/myPage" component={MyPage} />
            <Redirect path="*" to="/" />
        </Switch>
        <Footer />
    </Router>
);
