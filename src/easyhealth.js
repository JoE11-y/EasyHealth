import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//Constant Components
import GeneralHeader from './easyhealth/components/header/GeneralHeader'
import GeneralFooter from './easyhealth/components/footer/GeneralFooter'



//Body
import Auth from './easyhealth/general/auth/in-up'
import Home from './easyhealth/general'
import Signin from './easyhealth/general/auth/signin'
import Signup from './easyhealth/general/auth/signup'


//Route Management
import { AUTH, CREATEACCOUNT, LOGIN, HOME, ABOUT } from './routes'
import About from './easyhealth/general/pages/about'



function EasyHealth() {
    return (
        <Fragment>
            <Router>
                <section>
                    <GeneralHeader/>
                </section>
                <section>
                    <Switch>
                        <Route exact path={HOME} component={Home}/>
                        <Route path={AUTH} component={Auth}/>
                        <Route path={LOGIN} component={Signin}/>
                        <Route path={CREATEACCOUNT} component={Signup}/>


                        {/*Other Pages*/}
                        <Route path={ABOUT} component={About}/>
                    </Switch>
                </section>
                <section>
                    <GeneralFooter/>
                </section>
            </Router>
        </Fragment>
    )
}

export default EasyHealth
