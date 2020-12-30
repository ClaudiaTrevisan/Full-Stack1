import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import SignupPage from '../screens/signupPage/SignupPage'
import LoginPage from '../screens/loginPage/LoginPage'
import FeedPage from '../screens/feedPage/FeedPage'
import AddPage from '../screens/addPage/Addpage'
import DefaultPage from '../screens/defaultPage/DefaultPage'


const Router = () =>{
    const [state, steState] = useState(false);
    const [feedState, setFeedState] = useState(true);

    const onClickMode = () =>{
        steState(!state)
    };

    const changeStateFeed = () =>{
        setFeedState(!feedState)
    };

    return (
        <Switch>
            <DefaultPage function={onClickMode} state={state} stateFeed={feedState}>
            <Route exact path = '/'>
                <SignupPage state={state} functionChange={changeStateFeed}/>
            </Route>
            <Route exact path = '/login'>
                <LoginPage state={state} functionChange={changeStateFeed}/>
            </Route>
            <Route exact path = '/feed'>
                <FeedPage state={state}/>
            </Route>
            <Route exact path = '/add'>
                <AddPage/>
            </Route>
            </DefaultPage>
            <Route>
                <div>erro 404</div> 
            </Route>
        </Switch>
    );
}

export default Router