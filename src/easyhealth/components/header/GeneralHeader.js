import React from 'react'
import {Link} from 'react-router-dom'
import { ABOUT, AUTH, CREATEACCOUNT, HOME, LOGIN } from '../../../routes'
import '../styles/component.css'


function GeneralHeader() {
    
    return (
        <div className="general_header">
            General Header
            <ul>
                <Link to={HOME}>
                    <li>Home</li>
                </Link>
                <Link to={AUTH}>
                    <li>Auth</li>
                </Link>
                <Link to={LOGIN}>
                    <li>Login</li>
                </Link>
                <Link to={CREATEACCOUNT}>
                    <li>Create Account</li>
                </Link>
                <Link to={ABOUT}>
                    <li>About</li>
                </Link>
            </ul>
        </div>
    )
}

export default GeneralHeader
