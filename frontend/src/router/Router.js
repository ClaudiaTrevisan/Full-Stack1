import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import SignupPage from '../screens/signupPage/SignupPage'
import LoginPage from '../screens/loginPage/LoginPage'
import FeedPage from '../screens/feedPage/FeedPage'
import AddPage from '../screens/addPage/Addpage'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'


const Router = () =>{
    const [state, setState] = useState(true)

    return (
        <Switch>
            {/* <Header stateImage={state}/> */}
            <Route exact path = '/'>
                <SignupPage/>
            </Route>
            <Route exact path = '/login'>
                <LoginPage/>
            </Route>
            <Route exact path = '/feed'>
                <FeedPage/>
            </Route>
            <Route exact path = '/add'>
                <AddPage/>
            </Route>
            <Route>
                <div>erro 404</div> 
            </Route>
            <Footer/>
        </Switch>
    )
}

export default Router