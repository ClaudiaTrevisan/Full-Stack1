import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignupPage from '../screens/signupPage/SignupPage'
import LoginPage from '../screens/loginPage/LoginPage'
import FeedPage from '../screens/feedPage/FeedPage'
import DetailPage from '../screens/detailPage/DetailPage'
import AddPage from '../screens/addPage/Addpage'


const Router = () =>{

    return (
        <Switch>
            <Route exact path = '/'>
                <SignupPage/>
            </Route>
            <Route exact path = '/login'>
                <LoginPage/>
            </Route>
            <Route exact path = '/feed'>
                <FeedPage/>
            </Route>
            <Route exact path = '/detail'>
                <DetailPage/>
            </Route>
            <Route exact path = '/add'>
                <AddPage/>
            </Route>
            <Route>
                <div>erro 404</div> 
            </Route>
        </Switch>
    )
}

export default Router